import * as ext from '../export';
/**
 * 封装Ajax函数
 * @param {string} opt.url 发送请求的url
 * @param {string} opt.method http连接的方式，包括POST和GET两种方式
 * @param {boolean} opt.async 是否为异步，true为异步，false为同步
 * @param {object} opt.data 发送的参数，格式为对象类型
 * @param {function} opt.success ajax成功的回调函数
 * @param {function} opt.error ajax失败的回调函数
 */
function ajax(opt) {
    // 创建XMLHttpRequest对象
    let xmlHttp = null;
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 获取已登录的token
    let cToken = ext.CLogin.s_method.getCurrentPageToken();
    //获取当前浏览器的语言版本
    let cLang = ext.CLang.getLangPrmtByNavigator();
    // 发送请求
    if (opt.cMethod.toUpperCase() === 'POST') {
        xmlHttp.open('POST', opt.cURL, opt.bAsync);
        xmlHttp.setRequestHeader('Content-Type', opt.cContentType);
        xmlHttp.setRequestHeader('Token', cToken);
        xmlHttp.setRequestHeader('Navigator-language', cLang);
        let postData = JSON.stringify(opt.oPrmtData);
        xmlHttp.send(postData);
    }
    else if (opt.cMethod.toUpperCase() === 'GET') {
        let postData = '';
        for (const key in opt.oPrmtData) {
            if (postData.length !== 0)
                postData += '&';
            postData += `${key}=${opt.oPrmtData[key]}`;
        }
        xmlHttp.open('GET', `${opt.cURL}?${postData}`, opt.bAsync);
        xmlHttp.setRequestHeader('Token', cToken);
        xmlHttp.setRequestHeader('Navigator-language', cLang);
        xmlHttp.send(null);
    }
    // 服务器响应
    xmlHttp.onreadystatechange = () => {
        // 请求未初始化 xmlHttp.readyState==0
        // 服务器连接已建立 xmlHttp.readyState==1
        // 请求已连接 xmlHttp.readyState==2
        // 请求处理中 xmlHttp.readyState==3
        // 请求已完成且响应已就绪
        let rspData = xmlHttp.responseText;
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            switch (opt.sDataType) {
                case 'json':
                    rspData = JSON.parse(xmlHttp.responseText);
                    break;
                case 'string':
                default:
                    // rspData = xmlHttp.responseText;
                    break;
            }
            opt.fnSuccess(rspData);
        }
        else if (xmlHttp.readyState == 4 && xmlHttp.status !== 200) {
            if (rspData) {
                if (rspData.length > 0) {
                    opt.fnError(rspData);
                }
                else {
                    opt.fnError('no ajax responseText');
                }
            }
            else {
                opt.fnError('no ajax responseText');
            }
        }
        // //未找到页面
        // else if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
        //     opt.fnError(rspData);
        // }
    };
}
export { ajax };
