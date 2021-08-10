export const S_LOCALSTORAGE = {
    updateLocalLoginInfoBeforeOpenNewWindow: function () {
        let oStorage = gMEMO.oStorage;
        let key = oStorage.oKeys.sLoginInfoSet;
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let nCompanyID = login.Prmt.nCompanyID; //当前已登录用户的单位nId
        let nUserID = login.Prmt.nUserID; //当前已登录用户的用户nId
        let cUser = login.Prmt.cUser; //当前已登录用户的登录名
        if (nCompanyID.length === 0 && nUserID.length === 0)
            return;
        let oLoginInfoSet = S_LOCALSTORAGE.getLocalLoginInfoSet(); //本地保存的登录信息集
        if (oLoginInfoSet.length > 0) {
            let nIndex = -1;
            let oLoginInfo = null;
            for (let i = 0; i < oLoginInfoSet.length; i++) {
                const loginInfo = oLoginInfoSet[i];
                if (loginInfo.nCompanyID === nCompanyID && loginInfo.nUserID === nUserID && loginInfo.cUser === cUser) {
                    nIndex = i;
                    oLoginInfo = loginInfo;
                    break;
                }
            }
            if (nIndex !== -1) {
                oLoginInfoSet.splice(nIndex, 1);
                oLoginInfoSet.unshift(oLoginInfo);
                oStorage.setObjItem(key, oLoginInfoSet);
            }
            else {
                oLoginInfoSet.unshift(login.Prmt);
                oStorage.setObjItem(key, oLoginInfoSet);
            }
        }
        else {
            oStorage.setObjItem(key, [login.Prmt]);
        }
    },
    clearLoginInfo: function () {
        let oStorage = gMEMO.oStorage;
        let key = oStorage.oKeys.sLoginInfoSet;
        oStorage.removeItem(key); //清除本地保存的登录信息
    },
    saveLoginInfoToLocal: function () {
        let virDom = gMEMO.oVirDom;
        let login = virDom.cmpnReg.login;
        let localLofinInfoSet = S_LOCALSTORAGE.getLocalLoginInfoSet(); //本地保存的登录信息集
        let nIndex = localLofinInfoSet.findIndex(loginInfo => loginInfo.nCompanyID === login.Prmt.nCompanyID && loginInfo.cUser === login.Prmt.cUser);
        if (nIndex !== -1)
            localLofinInfoSet.splice(nIndex, 1); //去重
        localLofinInfoSet.unshift(login.Prmt); //顶部插入
        let oStorage = gMEMO.oStorage;
        let key = oStorage.oKeys.sLoginInfoSet;
        oStorage.setObjItem(key, localLofinInfoSet); //存入本地
    },
    getLocalLoginInfoSet() {
        let localLofinInfoSet = [];
        let oStorage = gMEMO.oStorage;
        let key = oStorage.oKeys.sLoginInfoSet;
        if (oStorage.getItem(key))
            localLofinInfoSet = JSON.parse(oStorage.getItem(key));
        return localLofinInfoSet;
    },
    fnExample: function () { }
};
