import * as ext from '../../export';
import { S_METHOD } from './S_METHOD';
export const S_AJAX = {
    getLanguageDB: function (fnSuccess, fnFail) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let oPrmt = {
            nUdid: new ext.CMath().random.between(10000, 99999),
            oLoginInfo: login.Prmt
        };
        ext.ajax({
            cMethod: 'Post',
            cURL: `Home/GetLanguageDB`,
            oPrmtData: oPrmt,
            cContentType: 'application/json; ',
            bAsync: true,
            sDataType: 'json',
            fnSuccess: function (data) {
                let oResp = JSON.parse(data.d);
                if (oResp.nState !== 0) { //失败
                    fnFail(oResp.cErrMsg);
                }
                else { //成功
                    fnSuccess(oResp.langDB);
                }
            },
            fnError: function (cError) {
                fnFail(cError);
            }
        });
    },
    logon: function (fnSuccess, //成功的回调函数
    fnFail //失败的回调函数
    ) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let oPrmt = {
            cAccount: login.Prmt.nCompanyID,
            cAccDynamicPw: new ext.CEncryption().encrypt(login.Prmt.cAccDynamicPw),
            cAdmin: login.Prmt.cUser,
            cAdminPwEnc: login.Prmt.cAccPwEnc,
            oHardware: login.Prmt.oHardware,
            nUdid: new ext.CMath().random.between(1000, 9999),
            arrLogonUser: login.RunningState.arrLogonUser //注册用户集
        };
        ext.ajax({
            cMethod: 'Post',
            cURL: `Home/Logon`,
            oPrmtData: oPrmt,
            cContentType: 'application/json; ',
            bAsync: true,
            sDataType: 'json',
            fnSuccess: function (data) {
                let oResp = JSON.parse(data.d);
                if (oResp.nState !== 0) { //失败
                    fnFail(oResp.cErrMsg);
                }
                else { //成功
                    fnSuccess();
                }
            },
            fnError: function (cError) {
                fnFail(cError);
            }
        });
    },
    logout: function (fnSuccess, //成功的回调函数
    fnFail //失败的回调函数
    ) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let oPrmt = {
            nUdid: new ext.CMath().random.between(10000, 99999),
            oLoginInfo: login.Prmt
        };
        ext.ajax({
            cMethod: 'Post',
            cURL: `Home/Logout`,
            oPrmtData: oPrmt,
            cContentType: 'application/json; ',
            bAsync: true,
            sDataType: 'json',
            fnSuccess: function (data) {
                let oResp = JSON.parse(data.d);
                if (oResp.nState !== 0) { //失败
                    fnFail(oResp.cErrMsg);
                }
                else { //成功
                    fnSuccess();
                }
            },
            fnError: function (cError) {
                fnFail(cError);
            }
        });
    },
    guestLogin: function (fnSuccess, //成功的回调函数
    fnFail //失败的回调函数
    ) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let cShareCode = S_METHOD.getShareCode(login.Prmt.nCompanyID); //获取账户文本框中填写的特征码
        let oPrmt = {
            nUDID: new ext.CMath().random.between(1000, 9999),
            cShareCode: cShareCode,
            cVisitorPhoneNumber: login.Prmt.cUser,
            cVisitorPassword: login.Prmt.cPwEnc //口令：推送登录时如果需要填写口令，填写在'密码'文本框
        };
        ext.ajax({
            cMethod: 'Post',
            cURL: `Home/LoginByShareContent`,
            oPrmtData: oPrmt,
            cContentType: 'application/json; ',
            bAsync: true,
            sDataType: 'json',
            fnSuccess: function (data) {
                let oResp = JSON.parse(data.d);
                if (oResp.nState !== 0) { //失败
                    fnFail(oResp.cErrMsg);
                }
                else { //成功
                    fnSuccess(oResp);
                }
            },
            fnError: function (cError) {
                fnFail(cError);
            }
        });
    },
    userLogin: function (fnSuccess, //成功的回调函数
    fnFail //失败的回调函数
    ) {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let oPrmt = {
            nUdid: login.Prmt.nUdid,
            nCompanyID: login.Prmt.nCompanyID,
            cAccDynamicPw: login.Prmt.cAccDynamicPw,
            cUser: login.Prmt.cUser,
            cPwEnc: login.Prmt.cPwEnc,
            cNPwEnc: new ext.CEncryption().encrypt(login.RunningState.cNewPassword),
            oHardware: login.Prmt.oHardware //硬件信息
        };
        ext.ajax({
            cMethod: 'Post',
            cURL: 'Home/Login',
            oPrmtData: oPrmt,
            cContentType: 'application/json; ',
            bAsync: true,
            sDataType: 'json',
            fnSuccess: function (data) {
                let oResp = JSON.parse(data.d);
                if (oResp.nState !== 0) { //失败
                    fnFail(oResp.cErrMsg);
                }
                else { //成功
                    fnSuccess(oResp);
                }
            },
            fnError: function (cError) {
                fnFail(cError);
            }
        });
    },
    fnExample: function () { }
};
