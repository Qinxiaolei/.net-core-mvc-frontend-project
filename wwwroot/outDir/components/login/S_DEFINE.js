import * as ext from '../../export';
export const S_DEFINE = {
    elementIdDict: {
        cContainerId: 'loginModalComponentContainer',
        cLoginModalId: 'loginModal',
        cBtnOpenLoginModalId: 'openLoginModalBtn',
        cBtnCloseLoginModalId: 'closeLoginModalBtn',
        cLoginContainerId: 'loginContainer',
        cLoginAccountCId: 'loginAccountContainer',
        cLoginUserCId: 'loginUserContainer',
        cLoginPasswordCId: 'loginPassswordContainer',
        cChangePwContainerId: 'changePwContainer',
        cRememberPwCheckboxId: 'rememberPwCheckbox',
        cLogonContainerId: 'logonContainer',
        cLogonUserContainerId: 'logonUserContainer',
        cIptAccountId: 'iptAccount',
        cAccDrpdwnMenuId: 'accountDropdownMenu',
        cIptUserId: 'iptUser',
        cUserDrpdwnMenuId: 'userDropdownMenu',
        cIptPasswordId: 'iptPassword',
        cIptConfirmOldPwCId: 'iptConfirmOldPwContainer',
        cIptConfirmPwCId: 'iptConfirmPwContainer',
        cIptConfirmOldPwId: 'iptConfirmOldPw',
        cIptNewPwId: 'iptNewPw',
        cIptConfirmPwId: 'iptConfirmPw',
        cLoginBtnContainerId: 'loginBtnContainer',
        cBtnLoginId: 'btnLogin',
        cIptAccountPwId: 'iptAccPw',
        cLogonBtnContainerId: 'logonBtnContainer',
        cLogonBtnId: 'btnLogon', //注册按钮id
    },
    logonUserDef: {
        cUser: '',
        cPwEnc: new ext.CEncryption().encrypt('123456'),
        cUserFullName: '',
        cPhone: '',
        cEmail: '',
        cUserJobCode: '',
        cDepartment: '',
        cSupervisor: '',
        cStatus: ext.G_DEFINE.newUserStatusDict.enable,
        sExt: '' //备用扩展
    },
    cAccDymPwConn: '∷',
    logonBtnStateDict: {
        none: 'none',
        in: 'in',
        success: 'success',
        failure: 'failure' //注册失败，黄色，显示'注册'字样
    }
};
