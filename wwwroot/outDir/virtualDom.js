import * as ext from './export'; //导入外部组件或函数
/**
 * DOM映射；数据中心
 */
class CVirtualDom {
    constructor() {
        this.cUDID = 'v'; //唯一识别号；含祖组件udid信息
        this.nChildCount = 0;
        this.config = {
            isIDBFirst: true,
            nItvTimeSaveWeb: 5 * 60 * 1000,
            isMyDataFirst: true,
            nRcdCreateDays: 3,
            isOnlySearchMode: false,
            cEnvironment: ext.G_DEFINE.envDict.PROD //当前运行环境
        };
        this.cidReg = {};
        this.cmpnReg = {
            pageHead: new ext.CPageHead(),
            login: new ext.CLogin(),
            web: new ext.CWeb(),
        };
        this.modelReg = {
            cmpnModal: {},
            alertModal: {},
            toolModal: {},
            editModal: {},
            commonModal: new ext.CCommonModal()
        };
    }
    //得到不同的子组件udid;给子组件用
    newChildUDID() {
        this.nChildCount++;
        return this.nChildCount.toString();
    } //派生子组件的dirID;
    init() {
        let oLang = gMEMO.oLang;
        if (!oLang)
            gMEMO.oLang = oLang = new ext.CLang();
        //登录信息以最后一次登录者初始化
        ext.CLogin.s_method.initByLastLogin();
        //view
        this.renewUI();
    } //初始化
    renewUI() {
        let oThis = this;
        oThis.modelReg.commonModal.renewUI(); //通用模态框
        oThis.cmpnReg.pageHead.renewUI(); //页头
        oThis.cmpnReg.login.renewUI(); //登录页
    }
    //保存页面快照
    savePageSnapshot(oThis) {
        let oStorage = gMEMO.oStorage;
        let key = oStorage.oKeys.sPageSnapshot;
        oStorage.setObjItem(key, oThis);
    }
    //恢复页面快照
    restoreVirDom() {
        let oStorage = gMEMO.oStorage;
        let key = oStorage.oKeys.sPageSnapshot;
        let sVirDom = oStorage.getItem(key);
        if (sVirDom) {
            let oVirDomPSS = JSON.parse(sVirDom);
            ext.copyProperties(oVirDomPSS, gMEMO.oVirDom);
            gMEMO.oVirDom.renewUI();
        }
    }
}
export { CVirtualDom };
