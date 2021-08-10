export const S_DEFINE = {
    elementIdDict: {
        cContainerId: 'pageHeadComponentContainer',
        cUserFullNameCId: 'userFullNameContainer',
        cSearchIptCId: 'searchInputContainer',
        cTimeCId: 'timeContainer',
        cMPDrpdwnMenuCId: 'managementPageDropdownMenu',
        cLogoCId: 'logoContainer',
        cHeaderSearchIptCId: 'headerSearchIptContainer',
        cHeaderSearchIptId: 'headerSearchIpt', //页头搜索框id
    },
    arrRouteFc: [{
            cUrl: 'http://195.168.0.16:8001/IndexBrowseOne.aspx',
            cVer: 'v2.0',
            cEnv: 'PRODUCTION',
            isShow: true
        }, {
            cUrl: 'http://195.168.0.2:8001/LoginOne.aspx',
            cVer: 'v1.0',
            cEnv: 'PRODUCTION',
            isShow: false
        }, {
            cUrl: 'http://195.168.0.2:8006/LoginOne.aspx',
            cVer: 'v1.0',
            cEnv: 'PRODUCTION',
            isShow: false
        }],
    arrRouteMc: [{
            cUrl: 'http://122.224.24.98:8012/WebForm/IColorMCMain.aspx',
            cVer: 'v2.0',
            cEnv: 'PRODUCTION',
            isShow: true
        }, {
            cUrl: 'http://www.yutaismart.com:8002/WebForm/IColorMCMain.aspx',
            cVer: 'v1.0',
            cEnv: 'PRODUCTION',
            isShow: false
        }, {
            cUrl: 'http://www.yutaismart.com:8009/WebForm/IColorMCMain.aspx',
            cVer: 'v1.0',
            cEnv: 'PRODUCTION',
            isShow: false
        }]
};
