class CSystemInfo {
    /**
     *软硬件环境
     *
     * @param IEVersion IE版本号
     * @param ExplorerInfo 浏览器型号
     * @param OsInfo 前端操作系统
     */
    constructor() {
        this.IEVersion = CSystemInfo.fnIEVersion();
        this.ExplorerInfo = CSystemInfo.fnGetExplorerInfo();
        this.OsInfo = CSystemInfo.fnGetOsInfo();
    }
    // 判断浏览器是否是IE以及其版本号
    static fnIEVersion() {
        try {
            let explorer = navigator.userAgent; //取得浏览器的userAgent字符串
            let isIE = explorer.indexOf('compatible') > -1 && explorer.indexOf('MSIE') > -1; //判断是否IE<11浏览器
            let isEdge = explorer.indexOf('Edge') > -1 && !isIE; //判断是否IE的Edge浏览器
            let isIE11 = explorer.indexOf('Trident') > -1 && explorer.indexOf('rv:11.0') > -1;
            if (isIE) {
                let reIE = new RegExp('MSIE (\\d+\\.\\d+);');
                reIE.test(explorer);
                let fIEVersion = parseFloat(RegExp['$1']);
                if (fIEVersion == 7) {
                    return '7';
                }
                else if (fIEVersion == 8) {
                    return '8';
                }
                else if (fIEVersion == 9) {
                    return '9';
                }
                else if (fIEVersion == 10) {
                    return '10';
                }
                else {
                    return '6'; //IE版本<=7
                }
            }
            else if (isEdge) {
                return 'edge'; //edge
            }
            else if (isIE11) {
                return '11'; //IE11
            }
            else {
                return '-1'; //不是ie浏览器
            }
        }
        catch (e) {
            alert(e.message);
        }
    }
    // 判断各个版本的浏览器
    static fnGetExplorerInfo() {
        try {
            let sexplorer = navigator.userAgent;
            //IE
            let okie = CSystemInfo.fnIEVersion();
            if (okie !== '-1') {
                return 'IE' + okie;
            }
            //Chrome
            if (sexplorer.indexOf('Chrome') !== -1) {
                return 'Chrome';
            }
            //Firefox
            if (navigator.userAgent.indexOf('Firefox') !== -1) {
                return 'Firefox';
            }
            //Opera
            if (navigator.userAgent.indexOf('Opera') !== -1) {
                return 'Opera';
            }
            //Safari
            if (navigator.userAgent.indexOf('Safari') !== -1) {
                return 'Safari';
            }
            return '其他';
        }
        catch (e) {
            alert(e.message);
        }
    }
    // 获取各个不同系统，以及其版本号，位数
    static fnGetOsInfo() {
        let userAgent = navigator.userAgent.toLowerCase();
        let name = 'Unknown';
        let version = 'Unknown';
        if (userAgent.indexOf('win') > -1) {
            name = 'Windows';
            if (userAgent.indexOf('windows nt 5.0') > -1) {
                version = 'Windows 2000';
            }
            else if (userAgent.indexOf('windows nt 5.1') > -1 ||
                userAgent.indexOf('windows nt 5.2') > -1) {
                version = 'Windows XP';
            }
            else if (userAgent.indexOf('windows nt 6.0') > -1) {
                version = 'Windows Vista';
            }
            else if (userAgent.indexOf('windows nt 6.1') > -1 ||
                userAgent.indexOf('windows 7') > -1) {
                version = 'Windows 7';
            }
            else if (userAgent.indexOf('windows nt 6.2') > -1 ||
                userAgent.indexOf('windows 8') > -1) {
                version = 'Windows 8';
            }
            else if (userAgent.indexOf('windows nt 6.3') > -1) {
                version = 'Windows 8.1';
            }
            else if (userAgent.indexOf('windows nt 6.2') > -1 ||
                userAgent.indexOf('windows nt 10.0') > -1) {
                version = 'Windows 10';
            }
            else {
                version = 'Unknown';
            }
        }
        else if (userAgent.indexOf('iphone') > -1) {
            name = 'Iphone';
        }
        else if (userAgent.indexOf('mac') > -1) {
            name = 'Mac';
        }
        else if (userAgent.indexOf('x11') > -1 ||
            userAgent.indexOf('unix') > -1 ||
            userAgent.indexOf('sunname') > -1 ||
            userAgent.indexOf('bsd') > -1) {
            name = 'Unix';
        }
        else if (userAgent.indexOf('linux') > -1) {
            if (userAgent.indexOf('android') > -1) {
                name = 'Android';
            }
            else {
                name = 'Linux';
            }
        }
        else {
            name = 'Unknown';
        }
        let os = { name: '', version: '' };
        os.name = name;
        os.version = version;
        let sX64 = 'x86';
        if (userAgent.indexOf('win64') >= 0 || userAgent.indexOf('wow64') >= 0) {
            sX64 = 'x64';
        }
        let srt = os.name + '-' + os.version + '-' + sX64;
        return srt;
    }
}
export { CSystemInfo };
export function checkMvcRoute(cViewName) {
    cViewName = '/' + cViewName;
    let cRout = window.location.pathname;
    if (cRout == '/')
        cRout = '/Home';
    return cRout == cViewName;
}
