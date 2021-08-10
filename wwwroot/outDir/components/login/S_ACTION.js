import * as ext from '../../export';
import { S_DEFINE } from './S_DEFINE';
import { S_METHOD } from './S_METHOD';
import { S_AJAX } from './S_AJAX';
import { S_LOCALSTORAGE } from './S_LOCALSTORAGE';
import { CLang } from '../../language/language';
export const S_ACTION = {
    logout: function () {
        S_AJAX.logout(function () {
            S_LOCALSTORAGE.clearLoginInfo(); //清除本地保存的登录信息
            window.location.reload(); //刷新页面
        }, function (cError) {
            alert(`${CLang.trans('退出失败：')}${cError}`);
        });
    },
    addLogonUser: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser.push(Object.assign({}, S_DEFINE.logonUserDef)); //数据中心增加一个待注册用户信息的默认值
        login.renewLogonUserUI(); //刷新待注册用户信息区UI
    },
    syncLogonState: function (nIndex, cStatus) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cStatus = cStatus;
    },
    syncLogonSupervisor: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cSupervisor = cValue;
    },
    syncLogonDepartment: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cDepartment = cValue;
    },
    syncLogonJobCode: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cUserJobCode = cValue;
    },
    syncLogonEmail: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cEmail = cValue;
    },
    syncLogonPhone: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cPhone = cValue;
    },
    syncLogonFullName: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cUserFullName = cValue;
    },
    syncLogonPw: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cPwEnc = new ext.CEncryption().encrypt(cValue);
    },
    syncLogonUser: function (nIndex, cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser[nIndex].cUser = cValue;
    },
    clearLogonUser: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.arrLogonUser = [];
        login.renewLogonUserUI();
    },
    syncAccDynamicPw: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt.cAccDynamicPw = cValue;
    },
    syncAccountPw: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt.cAccPwEnc = new ext.CEncryption().encrypt(cValue);
    },
    toggleChangePw: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.isChangePw = !login.RunningState.isChangePw;
        login.Prmt.cPwEnc = ''; //清空密码填写值
        login.RunningState.cConfirmOldPw = ''; //清空确认原密码填写值
        login.RunningState.cNewPassword = ''; //清空新密码填写值
        login.RunningState.cConfirmPw = ''; //清空确认密码填写值
        login.renewLoginUI();
    },
    toggleRememberPwCheckbox: function (isChecked) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt.isKeepPw = isChecked;
    },
    syncConfirmPw: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.cConfirmPw = cValue;
        login.renewConfirmPwUI();
    },
    syncNewPassword: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.cNewPassword = cValue;
        if (login.RunningState.cConfirmPw.length > 0) {
            login.renewConfirmPwUI();
        }
    },
    syncConfirmOldPw: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.cConfirmOldPw = cValue;
        login.renewIptConfirmOldPwUI();
    },
    syncPassword: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt.cPwEnc = new ext.CEncryption().encrypt(cValue);
        if (login.RunningState.isChangePw && login.RunningState.cConfirmOldPw.length > 0) {
            login.renewIptConfirmOldPwUI();
        }
    },
    syncUserByDropdownItem: function (cUser) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt.cUser = cUser; //登录名
        login.renewLoginUserUI();
        //清空密码文本框填写值
        login.Prmt.cPwEnc = ''; //密码
        login.renewLoginPasswordUI();
    },
    syncUser: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt.cUser = cValue;
        //清空密码文本框填写值
        login.Prmt.cPwEnc = '';
        login.renewLoginPasswordUI();
        //当本地存在填写的用户名时，取本地登录信息并赋值文本框
        let oLoginInfoSet = S_LOCALSTORAGE.getLocalLoginInfoSet(); //本地保存的登录信息集
        let oLoginInfo = oLoginInfoSet.find(o => o.cUser.trim().toUpperCase() === cValue.trim().toUpperCase());
        if (oLoginInfo) {
            login.Prmt = oLoginInfo;
            login.renewLoginUI();
            let iptUser = document.getElementById(S_DEFINE.elementIdDict.cIptUserId);
            if (iptUser)
                ext.setInputCursorPosition(iptUser, iptUser.value.length);
        }
    },
    syncAccountByDropdownItem: function (cCompanyCode, cCompanyName) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        //集团注册码文本框预设值显示单位名称
        login.Prmt.cAccount = cCompanyName; //单位名称
        login.Prmt.nCompanyID = cCompanyCode; //集团注册码
        login.renewLoginAccountUI();
        //清空密码文本框填写值
        login.Prmt.cPwEnc = '';
        login.renewLoginPasswordUI();
    },
    syncAccount: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt.nCompanyID = cValue;
        login.Prmt.cAccount = ''; //清除老的集团号
        login.renewLoginAccountUI(); //刷新集团注册码文本框UI
        let cShareCode = S_METHOD.getShareCode(login.Prmt.nCompanyID); //获取账户文本框中填写的特征码
        if (cShareCode.length > 0) { //填写的是推送码
            //清空'登录名/手机号'文本框填写值
            login.Prmt.cUser = '';
            login.renewLoginUserUI();
            //清空'密码'文本框填写值
            login.Prmt.cPwEnc = '';
            login.renewLoginPasswordUI();
        }
    },
    connectAccDymPw: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        if (login.Prmt.nCompanyID.indexOf(S_DEFINE.cAccDymPwConn) === -1) { //当前文本框中不存在连接符
            login.Prmt.nCompanyID += S_DEFINE.cAccDymPwConn; //文本框末尾增加连接符
        }
        login.renewLoginAccountUI(); //刷新集团注册码文本框UI
        ext.setInputCursorPosition(S_DEFINE.elementIdDict.cIptAccountId, login.Prmt.nCompanyID.length); //光标定位
    },
    switchLog: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.RunningState.isLogin = !login.RunningState.isLogin; //切换
        if (login.RunningState.isLogin && login.RunningState.isChangePw) {
            login.RunningState.isChangePw = false; //如果切换到登录页，关闭修改密码折叠
        }
        login.renewInnerUI();
    },
    handleLogon: function () {
        let eleIdDict = S_DEFINE.elementIdDict;
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        if (login.Prmt.nCompanyID.length === 0) { //未填写管理员账户
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptAccountId);
            return;
        }
        if (login.Prmt.cAccPwEnc.length === 0) { //未填写管理员密码
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptAccountPwId);
            return;
        }
        //注册按钮旋转、禁点
        login.RunningState.logonBtnStatus = S_DEFINE.logonBtnStateDict.in;
        login.renewLogonBtnUI();
        S_AJAX.logon(function () {
            //取消按钮旋转、禁点状态；显示绿色、'注册'字样
            login.RunningState.logonBtnStatus = S_DEFINE.logonBtnStateDict.success;
            login.renewLogonBtnUI();
        }, function (cError) {
            alert(`${CLang.trans('注册失败：')}${cError}`);
            //取消按钮旋转、禁点状态；显示黄色、'注册'字样
            login.RunningState.logonBtnStatus = S_DEFINE.logonBtnStateDict.failure;
            login.renewLogonBtnUI();
        });
    },
    userLogin: function () {
        let eleIdDict = S_DEFINE.elementIdDict;
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        S_METHOD.setAccDynamicPw(); //判断并设置是否填写动态口令
        if (login.Prmt.cUser.length === 0) { //未填写登录名
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptUserId);
            return;
        }
        if (login.Prmt.cPwEnc.length === 0) { //未填写登录密码
            S_METHOD.renewIptUIWhenFormatError(eleIdDict.cIptPasswordId);
            return;
        }
        //登录按钮旋转、禁点
        login.RunningState.ajax.isLogging = true;
        login.renewLoginBtnUI();
        //ajax登录
        S_AJAX.userLogin(function (oResp) {
            S_METHOD.renewUIAfterUserLogin(oResp); //刷新UI
            window.location.reload(); //刷新当前页面
        }, function (cError) {
            alert(`${CLang.trans('登录失败：')}${cError}`);
            //取消按钮旋转、禁点状态
            login.RunningState.ajax.isLogging = false;
            login.renewLoginBtnUI();
        });
    },
    guestLogin: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        //登录按钮旋转、禁点
        login.RunningState.ajax.isLogging = true;
        login.renewLoginBtnUI();
        //ajax登录
        S_AJAX.guestLogin(function (oResp) {
            S_METHOD.renewUIAfterGuestLogin(oResp);
        }, function (cError) {
            alert(`${CLang.trans('访客登录失败：')}${cError}`);
            //取消按钮旋转、禁点状态
            login.RunningState.ajax.isLogging = false;
            login.renewLoginBtnUI();
        });
    },
    changePassword: function () {
        if (S_METHOD.isFormatRightWhenChangePw()) {
            let virDom = gMEMO.oVirDom;
            let login = virDom.cmpnReg.login;
            //修改密码按钮旋转、禁点
            login.RunningState.ajax.isLogging = true;
            login.renewLoginBtnUI();
            //ajax登录并修改密码
            S_AJAX.userLogin(function (oResp) {
                S_METHOD.renewUIAfterUserLogin(oResp); //刷新UI
                window.location.reload(); //刷新当前页面
            }, function (cError) {
                alert(`${CLang.trans('修改密码失败：')}${cError}`);
                //取消按钮旋转、禁点状态
                login.RunningState.ajax.isLogging = false;
                login.renewLoginBtnUI();
            });
        }
    },
    handleLogin: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        if (login.RunningState.isChangePw) { //修改密码
            S_ACTION.changePassword();
        }
        else { //登录
            //判断是否存在特征码
            let cShareCode = S_METHOD.getShareCode(login.Prmt.nCompanyID); //获取账户文本框中填写的特征码
            if (cShareCode.length !== 0) { //存在
                S_ACTION.guestLogin(); //推送码登录
            }
            else { //不存在
                S_ACTION.userLogin(); //正常登录/账号密码登录
            }
        }
    },
    openModal: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        login.Prmt = ext.CLogin.getDefault().Prmt;
        login.RunningState = ext.CLogin.getDefault().RunningState;
        S_METHOD.setByLastLogin(); //填充上一次登录成功的填写值
        login.renewUI(); //刷新登录页UI
        S_METHOD.openModal(); //打开模态框
    },
    fnExample: function () { }
};
