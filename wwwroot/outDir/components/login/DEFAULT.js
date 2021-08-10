import { S_DEFINE } from './S_DEFINE';
export const DEFAULT = {
    CID: {
        cUDID: '',
        nChildCount: 0,
        cContainerID: S_DEFINE.elementIdDict.cContainerId
    },
    Prmt: {
        nUdid: 0,
        nCompanyID: '',
        nUserID: '',
        cUserJobCode: '',
        cUserFullName: '',
        cUserType: '',
        cAccount: '',
        cAccPwEnc: '',
        cAccDynamicPw: '',
        cUser: '',
        cPwEnc: '',
        isKeepPw: false,
        cGuest: '',
        tTime: 0,
        oHardware: {
            cMachineSN: '#',
            cSIP: '',
            cMAC: '',
            cExplorerInfo: '',
            cGPS: '',
            cOsInfo: '' //操作系统信息
        },
        cMeterPermission: '' //仪器权限
    },
    RunningState: {
        isLogin: true,
        isChangePw: false,
        arrLogonUser: [],
        cConfirmOldPw: '',
        cNewPassword: '',
        cConfirmPw: '',
        ajax: {
            isLogging: false, //正在登录
        },
        oAuthority: null,
        logonBtnStatus: S_DEFINE.logonBtnStateDict.none //注册按钮状态
    }
};
