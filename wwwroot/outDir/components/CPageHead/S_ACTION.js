export const S_ACTION = {
    handleHeaderSearchBtnClick: function () {
        let virDom = gMEMO.oVirDom;
        let oPageHead = virDom.cmpnReg.pageHead;
        let cSearchStr = oPageHead.Prmt.cSearchStr; //搜索框填写值
        let cPathname = window.location.pathname.replace('/', '');
        switch (cPathname) {
            default:
                break;
        }
    },
    syncHeaderSearchStr: function (cValue) {
        let virDom = gMEMO.oVirDom;
        let oPageHead = virDom.cmpnReg.pageHead;
        oPageHead.Prmt.cSearchStr = cValue;
    },
    fnExample: function () { }
};
