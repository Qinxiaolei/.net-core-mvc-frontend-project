import * as ext from '../../export';
import { S_DEFINE } from './S_DEFINE';
import { S_LOCALSTORAGE } from './S_LOCALSTORAGE';
import { S_AJAX } from './S_AJAX';
import { S_ACTION } from './S_ACTION';
export const S_METHOD = {
    getCurrentPageToken: function () {
        let cToken = '';
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        if (login.Prmt.nUdid === 0)
            return ''; //从未登录过
        let oStorage = gMEMO.oStorage;
        let cKey = oStorage.oKeys.sLoginInfoSet;
        let sLoginInfo = oStorage.getItem(cKey);
        if (sLoginInfo && sLoginInfo.length > 0) {
            let arrLoginInfo = JSON.parse(sLoginInfo);
            if (arrLoginInfo && arrLoginInfo.length > 0) {
                let oLoginInfo = arrLoginInfo.find(o => o.nCompanyID === login.Prmt.nCompanyID && o.nUserID === login.Prmt.nUserID); //根据当前页面已登录用户信息查找本地
                if (oLoginInfo) {
                    cToken = oLoginInfo.oHardware.cGPS;
                }
            }
        }
        return cToken;
    },
    getCurrentWebSiteToken: function () {
        let cToken = '';
        let oStorage = gMEMO.oStorage;
        let cKey = oStorage.oKeys.sLoginInfoSet;
        let sLoginInfo = oStorage.getItem(cKey);
        if (sLoginInfo && sLoginInfo.length > 0) {
            let arrLoginInfo = JSON.parse(sLoginInfo);
            if (arrLoginInfo && arrLoginInfo.length > 0) {
                let oLoginInfo = arrLoginInfo[0]; //取第一个
                cToken = oLoginInfo.oHardware.cGPS;
            }
        }
        return cToken;
    },
    renewIptUIWhenFormatError: function (cIptId) {
        let ipt = document.getElementById(cIptId);
        if (ipt) {
            ext.warningAnimate(ipt); //UI闪烁提示
            ipt.focus(); //文本框聚焦
        }
    },
    isFormatRightWhenChangePw: function () {
        let eleIdDict = S_DEFINE.elementIdDict; //元素id字典
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let cUser = login.Prmt.cUser; //用户名
        let cPwEnc = login.Prmt.cPwEnc; //密码
        let cConfirmOldPw = login.RunningState.cConfirmOldPw; //确认原密码
        let cConfirmOldPwEnc = new ext.CEncryption().encrypt(cConfirmOldPw);
        let cNewPassword = login.RunningState.cNewPassword; //新密码
        let cConfirmPw = login.RunningState.cConfirmPw; //确认新密码
        if (cUser.length === 0) { //用户名未填写
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptUserId);
            return false;
        }
        else if (cPwEnc.length === 0) { //密码未填写
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptPasswordId);
            return false;
        }
        else if (cConfirmOldPw.length === 0) { //确认原密码未填写
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptConfirmOldPwId);
            return false;
        }
        else if (cNewPassword.length === 0) { //新密码未填写
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptNewPwId);
            return false;
        }
        else if (cConfirmPw.length === 0) { //确认密码未填写
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptConfirmPwId);
            return false;
        }
        else if (cConfirmOldPwEnc !== cPwEnc) { //确认原密码原密码与不一致
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptConfirmOldPwId);
            return false;
        }
        else if (cConfirmPw !== cNewPassword) { //确认新密码与新密码填写值不一致
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptConfirmPwId);
            return false;
        }
        else {
            return true;
        }
    },
    renewUserDropdownMenu: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let loginInfoSet = S_LOCALSTORAGE.getLocalLoginInfoSet(); //本地保存的登录信息
        loginInfoSet = loginInfoSet.filter(loginInfo => loginInfo.cAccount === login.Prmt.cAccount); //过滤掉集团注册码不一致的登录信息
        let cHtml = '';
        for (let i = 0; i < loginInfoSet.length; i++) {
            const cUser = loginInfoSet[i].cUser;
            cHtml += `
            <li>
                <a
                    onclick="gMEMO.on.syncUserByDropdownItem('${cUser}');" 
                    class="dropdown-item py-2"
                    style="cursor:pointer;"
                >
                    ${cUser}
                </a>
            </li>`;
        }
        let iptUser = document.getElementById(S_DEFINE.elementIdDict.cIptUserId); //用户名文本框
        let eDropdownMenu = document.getElementById(S_DEFINE.elementIdDict.cUserDrpdwnMenuId); //用户名备选下拉菜单
        if (cHtml.length > 0) {
            if (iptUser)
                iptUser.setAttribute('data-bs-toggle', 'dropdown');
            if (eDropdownMenu)
                eDropdownMenu.innerHTML = cHtml;
        }
        else {
            if (iptUser)
                iptUser.removeAttribute('data-bs-toggle');
            if (eDropdownMenu)
                eDropdownMenu.innerHTML = '';
        }
    },
    renewAccDropdownMenu: function () {
        let loginInfoSet = S_LOCALSTORAGE.getLocalLoginInfoSet(); //本地保存的登录信息
        //根据集团注册码去重
        let arrCompanyCode = []; //集团注册码
        let arrCompanyName = []; //单位名称
        loginInfoSet.forEach(loginInfo => {
            if (arrCompanyCode.indexOf(loginInfo.nCompanyID) === -1) {
                arrCompanyCode.push(loginInfo.nCompanyID);
                arrCompanyName.push(loginInfo.cAccount);
            }
        });
        let cHtml = '';
        for (let i = 0; i < arrCompanyCode.length; i++) {
            const cCompanyCode = arrCompanyCode[i];
            const cCompanyName = arrCompanyName[i];
            cHtml += `
            <li>
                <a
                    onclick="gMEMO.on.syncAccountByDropdownItem('${cCompanyCode}','${cCompanyName}');" 
                    class="dropdown-item py-2"
                    style="cursor:pointer;"
                >
                    ${cCompanyCode}
                </a>
            </li>`;
        }
        let iptAcc = document.getElementById(S_DEFINE.elementIdDict.cIptAccountId); //集团注册码文本框
        let eDropdownMenu = document.getElementById(S_DEFINE.elementIdDict.cAccDrpdwnMenuId); //集团注册码备选下拉菜单
        if (cHtml.length > 0) {
            if (iptAcc)
                iptAcc.setAttribute('data-bs-toggle', 'dropdown');
            if (eDropdownMenu)
                eDropdownMenu.innerHTML = cHtml;
        }
        else {
            if (iptAcc)
                iptAcc.removeAttribute('data-bs-toggle');
            if (eDropdownMenu)
                eDropdownMenu.innerHTML = '';
        }
    },
    renewUIAfterGuestLogin: function (oResp) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        //取消按钮旋转、禁点状态
        login.RunningState.ajax.isLogging = false;
        login.renewLoginBtnUI();
        //关闭模态框
        //login参数赋值
        //刷新页头中的登录员真实姓名
    },
    renewUIAfterUserLogin: function (oResp) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let oPageHead = virDom.cmpnReg.pageHead;
        //login参数赋值
        ext.copyProperties(oResp.oLogCode, login.Prmt);
        let cNewPassword = login.RunningState.cNewPassword;
        let cUserFullName = login.Prmt.cUserFullName;
        login.Prmt.cAccount = oResp.oLogCode.nCompanyName; //单位名称
        login.Prmt.cPwEnc = cNewPassword.length > 0 ? cNewPassword : login.Prmt.cPwEnc; //密码：如果修改密码要赋值新密码
        login.Prmt.cUserFullName = cUserFullName.length > 0 ? cUserFullName : '?'; //真实姓名：无真实姓名时显示问号
        if (oResp.sExt.length > 0) {
            let oExt = JSON.parse(oResp.sExt);
            let cUserCode = oExt.cUserCode; //用户登录名
            let oUserAuthority = oExt.oUserAuthority; //用户权限
            login.Prmt.cUser = cUserCode;
            login.RunningState.oAuthority = oUserAuthority;
        }
        //刷新页头
        oPageHead.Prmt.cUserFullName = login.Prmt.cUserFullName;
        oPageHead.RunningState.isLogged = true;
        oPageHead.renewUI();
        //保存本次登录信息至本地
        S_LOCALSTORAGE.saveLoginInfoToLocal();
    },
    setAccDynamicPw: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let arr = login.Prmt.nCompanyID.split(S_DEFINE.cAccDymPwConn); //根据动态口令连接符切分
        if (arr.length > 0)
            login.Prmt.nCompanyID = arr[0]; //集团注册码
        if (arr.length > 1)
            login.Prmt.cAccDynamicPw = arr[1]; //动态口令
    },
    getShareCode: function (cStr) {
        let a = (' ' + cStr + ' ').split('#');
        if (a.length < 3)
            return '';
        for (let index = 1; index < a.length - 1; index++) {
            if (a[index].length === 9)
                return a[index];
        }
        return '';
    },
    getHardwareInfo: function () {
        let virDom = gMEMO.oVirDom;
        let sysInfo = virDom.cmpnReg.web.sysInfo;
        let oLoginHardware = {
            cMachineSN: '#',
            cSIP: '',
            cMAC: '',
            cExplorerInfo: sysInfo.ExplorerInfo,
            cGPS: '',
            cOsInfo: sysInfo.OsInfo //操作系统信息
        };
        return oLoginHardware;
    },
    setByLastLogin: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let localLofinInfoSet = S_LOCALSTORAGE.getLocalLoginInfoSet(); //本地保存的登录信息集
        if (localLofinInfoSet.length > 0) {
            let loginInfo = localLofinInfoSet[0]; //最近一次登录成功的登录信息
            if (loginInfo.isKeepPw) {
                login.Prmt.nUdid = loginInfo.nUdid;
                login.Prmt.cAccDynamicPw = loginInfo.cAccDynamicPw; //动态口令
                login.Prmt.cAccount = loginInfo.cAccount; //单位名称
                login.Prmt.nCompanyID = loginInfo.nCompanyID; //集团注册码
                login.Prmt.cUser = loginInfo.cUser; //登录名
                login.Prmt.cPwEnc = loginInfo.cPwEnc; //登录密码
                login.Prmt.oHardware = loginInfo.oHardware; //硬件信息
                login.Prmt.isKeepPw = true; //是否勾选'记住密码'
            }
        }
    },
    initByLastLogin: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let localLofinInfoSet = S_LOCALSTORAGE.getLocalLoginInfoSet(); //本地保存的登录信息集
        if (localLofinInfoSet.length > 0) {
            login.renewUI();
            login.Prmt = localLofinInfoSet[0]; //最近一次登录成功的登录信息
            //ajax登录
            S_AJAX.userLogin(function (oResp) {
                S_METHOD.renewUIAfterUserLogin(oResp); //刷新UI
            }, function (cError) {
                S_ACTION.openModal(); //打开登录模态框
            });
        }
        else {
            S_ACTION.openModal(); //打开登录模态框
        }
    },
    closeModal: function () {
        let eBtn = document.getElementById(S_DEFINE.elementIdDict.cBtnCloseLoginModalId);
        if (eBtn)
            eBtn.click();
    },
    openModal: function () {
        let eBtn = document.getElementById(S_DEFINE.elementIdDict.cBtnOpenLoginModalId);
        if (eBtn)
            eBtn.click();
    },
    fnExample: function () { }
};
