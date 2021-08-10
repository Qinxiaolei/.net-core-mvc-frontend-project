export const BEGINNUMBER = {
    id: 1,
    index: 0
};
export const G_DEFINE = {
    ajaxStateDict: {
        ready: 'ready',
        executing: 'executing' //执行中，等待此ajax完成才能再次发起同名ajax
    },
    langDict: {
        'CN': 'CN',
        'TW': 'TW',
        'EN': 'EN',
        'KN': 'KN',
        'VN': 'VN' //越文
    },
    envDict: {
        PROD: 'PRODUCTION',
        TEST: 'TEST',
        DEVE: 'DEVELOPMENT' //开发环境
    },
    pageRouteDict: {
        home: 'Home',
        detail: 'Detail',
        formula: 'Formula',
        accessMngm: 'AccessManagement',
        customerMngm: 'CustomerManagement',
        userMngm: 'UserManagement',
        dyeMngm: 'DyeManagement',
        auxiliaryMngm: 'AuxiliaryManagement',
        colorMeasurementReport: 'ColorMeasurementReport' //色差报告页
    },
    langLocalStorageKeyDict: {
        sLang: 'sLang'
    },
    keyboardKeyDict: {
        backspace: 8,
        enter: 13,
        shift: 16,
        control: 17,
        alt: 18,
        delete: 46
    },
    newUserStatusDict: {
        enable: '1',
        disable: '2' //禁用
    },
};
