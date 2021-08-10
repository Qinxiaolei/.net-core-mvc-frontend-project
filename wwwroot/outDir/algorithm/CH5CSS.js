/**
 * 获取子组件的dirID
 * @param obj
 */
export function getChildUDID(obj) {
    return `${obj.cUDID}_${obj.nChildCount++}`;
}
/**
 * 阻止冒泡函数
 * @param e
 */
export function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        if (window.event) {
            window.event.cancelBubble = true;
        }
    }
}
/**
 * 添加闪烁
 * @param ipt
 */
export function warningAnimate(ipt) {
    if (ipt) {
        ipt.classList.add('inputWrongErr');
        setTimeout(() => ipt.classList.remove('inputWrongErr'), 1000);
    }
}
/**
 * 设置input元素的光标位置
 * @param ipt input元素
 * @param nPos 光标位置
 */
export function setInputPosition(ipt, nPos) {
    // Modern browsers
    if (ipt.setSelectionRange) {
        ipt.focus();
        ipt.setSelectionRange(nPos, nPos);
        // IE8及以下的浏览器
    }
    else if (ipt.createTextRange) {
        let range = ipt.createTextRange();
        range.collapse(true);
        range.moveEnd('character', nPos);
        range.moveStart('character', nPos);
        range.select();
    }
}
/**
 * 在指定元素位置后追加新的元素
 * @param newElement 新的元素
 * @param targetElement 指定元素
 */
export function insertNewEleAfterTargetEle(newElement, targetElement) {
    let eParent = targetElement.parentElement; //指定元素的父节点
    if (eParent) {
        if (eParent.lastChild === targetElement) { //判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
            eParent.appendChild(newElement);
        }
        else {
            eParent.insertBefore(newElement, targetElement.nextSibling);
        }
        ;
    }
}
;
/**
 * 设置input元素的光标位置
 * @param param input元素id或者input元素
 * @param nPosition 光标位置
 */
export function setInputCursorPosition(param, nPosition) {
    let ipt = null;
    if (typeof param === 'string') {
        let cIptId = param;
        ipt = document.getElementById(cIptId);
    }
    else if (typeof param === 'object') {
        ipt = param;
    }
    let cType = ipt.type;
    if (cType === 'date')
        return;
    if (ipt) {
        if (ipt.setSelectionRange) {
            ipt.focus();
            ipt.setSelectionRange(nPosition, nPosition);
        }
        else if (ipt.createTextRange) { // IE8及以下的浏览器
            let range = ipt.createTextRange();
            range.collapse(true);
            range.moveEnd('character', nPosition);
            range.moveStart('character', nPosition);
            range.select();
        }
    }
}
/**
 * 验证填写值是否是有效数字
 * @param cValue
 */
export function getNumber(cValue) {
    if (cValue.length > 0) {
        let arrSplit = cValue.split('');
        for (let index = 0; index < arrSplit.length; index++) {
            let cStr = arrSplit[index];
            if (index === 0) { //第一个字符只能是数字或者小数点
                if (cStr !== '.' && !/^[0-9]*$/.test(cStr))
                    arrSplit[0] = '';
            }
            else if (index === 1) { //第二个字符只能是数字或者小数点
                if (cStr === '.') {
                    if (arrSplit[0] === '.')
                        arrSplit[1] = '';
                }
                else {
                    if (!/^[0-9]*$/.test(cStr))
                        arrSplit[1] = '';
                }
            }
            else { //从第三个字符起必须是数字
                if (!/^[0-9]*$/.test(cStr))
                    arrSplit[index] = '';
            }
        }
        return arrSplit[0].length === 0 ? '' : arrSplit.join('');
    }
    return cValue;
}
/** 获取页面URL中的参数 */
export function getUrlPrmt() {
    let cUrl = location.search; //获取url中"?"符后的字串
    let oRequest = new Object();
    if (cUrl.indexOf('?') !== -1) {
        let cStr = cUrl.substr(1); //"cInCode=00000&cCBInCode=3913&cCRcdCode=3913-005-304"
        let arrStr = cStr.split('&'); //["cInCode=00000", "cCBInCode=3913", "cCRcdCode=3913-005-304"]
        for (let i = 0; i < arrStr.length; i++) {
            let arrStrI = arrStr[i].split('='); //["cInCode", "00000"] ["cCBInCode", "3913"] ["cCRcdCode", "3913-005-304"]
            let cProp = arrStrI[0]; //属性  cInCode cCBInCode cCRcdCode
            let cValue = arrStrI[1]; //值  00000 3913 3913-005-304
            oRequest[cProp] = unescape(cValue); //unescape() 函数可对通过 escape() 编码的字符串进行解码。
        }
    }
    return oRequest;
}
/**
 * textarea高度自适应
 * 页面中的textarea直接加属性 onkeyup="gMEMO.on.adaptTextareaHeight(this);"
 * @param obj
 */
export function adaptTextareaHeight(textarea) {
    if (!textarea)
        return;
    if (textarea.tagName.toLowerCase() !== 'textarea')
        return;
    textarea.style.height = 'auto';
    textarea.style.overflow = 'hidden';
    textarea.scrollTop = 0; //防抖动
    textarea.style.height = `${textarea.scrollHeight}px`;
}
/**
 * 根据当前页面宽度判断打开窗口时是在当前窗口还是新窗口
 */
export function getWindowOpenTarget() {
    let nWidth = document.body.clientWidth;
    if (nWidth >= 768) {
        return '_blank';
    }
    else {
        return '_self';
    }
}
// https://segmentfault.com/a/1190000018428170
/**
* 防抖：对于短时间内连续触发的事件函数（如滚动条监听、input框输入、多次触发点击事件、鼠标滑动事件等），防抖的含义就是在某个时间期限内，此事件处理函数只执行一次
* fn 需要防抖的函数
* delay 防抖期限值，毫秒；在此期限值内函数只执行一次
*/
export function fnDebounce(fn, delay) {
    let timer = -1; //借助闭包
    return () => {
        if (timer !== -1) {
            window.clearTimeout(timer);
            timer = -1;
        }
        timer = window.setTimeout(fn, delay);
    };
}
/**
 * 判断某个字符串中是否包含某个字符串
 * 例：判断'分散嫩黄SFN 200%'中是否包含'黄'：isInclude('黄','分散嫩黄SFN 200%')
 * @param cSrc 要包含的字符串
 * @param cAim 要判断的字符串
 */
export function isInclude(cSrc, cAim) {
    let cSrcTrim = cSrc.trim().toUpperCase();
    let cAimTrim = cAim.trim().toUpperCase();
    if (cSrcTrim.length > 0) {
        if (cAimTrim.length > 0) {
            let arrInclude = [];
            for (let i = 0; i < cSrcTrim.length; i++) {
                const c = cSrcTrim[i];
                if (c.length === 0) {
                    arrInclude.push(true);
                }
                else {
                    if (cAimTrim.indexOf(c) !== -1) { //包含
                        arrInclude.push(true);
                    }
                    else { //不包含
                        arrInclude.push(false);
                    }
                }
            }
            return arrInclude.findIndex(isInclude => !isInclude) === -1;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
/**
 * 创建下载文件标签
 * @param cContent //文件内容
 * @param cFileName //文件名
 */
export function createDownloadLink(cContent, cFileName) {
    let downLink = document.createElement('a');
    downLink.download = cFileName;
    let blob = new Blob([cContent]);
    let url = URL.createObjectURL(blob);
    downLink.href = url;
    document.body.appendChild(downLink);
    downLink.click();
    document.body.removeChild(downLink);
    URL.revokeObjectURL(url);
}
/**
 * 保存文件到本机
 * 原理就是利用Blob对象把需要下载的内容转换为二进制，然后借助 < a > 标签的href属性和download属性，实现下载。
 * @param cContent 需要下载的内容
 * @param cFileName 保存的文件的名字
 */
export function saveContentToComputer(cContent, cFileName) {
    let downLink = document.createElement('a');
    downLink.download = cFileName;
    //字符内容转换为blod地址{ type: 'text/csv,charset=UTF-8'}, { type: 'text/plain,charset=Unicode' }
    let blob = new Blob([cContent]);
    downLink.href = URL.createObjectURL(blob);
    //链接插入到页面
    document.body.appendChild(downLink);
    downLink.click();
    //移除下载链接
    document.body.removeChild(downLink);
}
