import * as ext from '../export';
import { langCN } from './cn';
import { langTW } from './tw';
import { langEN } from './en';
import { langKN } from './kn';
import { langVN } from './vn';
class CLang {
    constructor() {
        this.langDB = langCN; //语言库
        this.setInit(); //初始化
    }
    //获取浏览器语言版本
    static getLangPrmtByNavigator() {
        let cLang = navigator.language.toUpperCase(); //中文简体：zh-CN  中文繁体：zh-TW  英文：en  韩文：ko  越南文：vi
        if (cLang.indexOf('CN') >= 0) { //中文简体
            return ext.G_DEFINE.langDict.CN;
        }
        else if (cLang.indexOf('EN') >= 0) { //英文
            return ext.G_DEFINE.langDict.EN;
        }
        else if (cLang.indexOf('TW') >= 0) { //中文繁体
            return ext.G_DEFINE.langDict.TW;
        }
        else if (cLang.indexOf('KO') >= 0) { //韩文
            return ext.G_DEFINE.langDict.KN;
        }
        else if (cLang.indexOf('VI') >= 0) { //越南文
            return ext.G_DEFINE.langDict.VN;
        }
        return ext.G_DEFINE.langDict.CN; //默认中文简体
    }
    //确定语言库
    static getLangDB() {
        let cLang = CLang.getLangPrmtByNavigator();
        let langDB = [];
        switch (cLang) {
            case ext.G_DEFINE.langDict.CN: //中文简体
            default:
                langDB = langCN;
                break;
            case ext.G_DEFINE.langDict.TW: //中文繁体
                langDB = langTW;
                break;
            case ext.G_DEFINE.langDict.EN: //英文
                langDB = langEN;
                break;
            case ext.G_DEFINE.langDict.KN: //韩文
                langDB = langKN;
                break;
            case ext.G_DEFINE.langDict.VN: //越南文
                langDB = langVN;
                break;
        }
        return langDB;
    }
    //转换函数
    static trans(cTextCN) {
        let langDB = CLang.getLangDB();
        let nIndex = langCN.findIndex(text => text === cTextCN);
        if (nIndex === -1) {
            return cTextCN;
        }
        else {
            return langDB[nIndex] ? langDB[nIndex] : cTextCN;
        }
    }
    //可定制版
    //初始化
    setInit() {
        //查本地语言缓存，若存在，根据缓存确定语言；若不存在，根据浏览器语言版本确定语言
        let lang = this.getLocalLang();
        if (lang) {
            this.nId = lang.nId;
            this.cLangPrmt = lang.cLangPrmt;
            this.cLangName = lang.cLangName;
            this.langDB = lang.langDB;
        }
        else { //本地不存在：根据浏览器语言版本确定语言
            this.setLangByNavigator();
        }
    }
    //根据浏览器设置语言
    setLangByNavigator() {
        let nId = -1; //nId
        let cLangPrmt = ''; //语言版本
        let cLangName = 'Default Language'; //语言名称
        let langDB = []; //语言库
        let cNavigatorLangPrmt = navigator.language.toUpperCase(); //中文简体：zh-CN  中文繁体：zh-TW  英文：en  韩文：ko  越南文：vi
        if (cNavigatorLangPrmt.includes('CN')) { //中文简体
            cLangPrmt = ext.G_DEFINE.langDict.CN;
        }
        else if (cNavigatorLangPrmt.includes('EN')) { //英文
            cLangPrmt = ext.G_DEFINE.langDict.EN;
        }
        else if (cNavigatorLangPrmt.includes('TW')) { //中文繁体
            cLangPrmt = ext.G_DEFINE.langDict.TW;
        }
        else if (cNavigatorLangPrmt.includes('KO')) { //韩文
            cLangPrmt = ext.G_DEFINE.langDict.KN;
        }
        else if (cNavigatorLangPrmt.includes('VI')) { //越南文
            cLangPrmt = ext.G_DEFINE.langDict.VN;
        }
        else {
            cLangPrmt = ext.G_DEFINE.langDict.CN; //默认中文简体
        }
        switch (cLangPrmt) {
            case ext.G_DEFINE.langDict.CN: //中文简体
            default:
                langDB = langCN;
                break;
            case ext.G_DEFINE.langDict.TW: //中文繁体
                langDB = langTW;
                break;
            case ext.G_DEFINE.langDict.EN: //英文
                langDB = langEN;
                break;
            case ext.G_DEFINE.langDict.KN: //韩文
                langDB = langKN;
                break;
            case ext.G_DEFINE.langDict.VN: //越南文
                langDB = langVN;
                break;
        }
        this.nId = nId; //nId
        this.cLangPrmt = cLangPrmt; //语言参数
        this.cLangName = cLangName; //语言名称
        this.langDB = langDB; //语言库
    }
    //获取本地缓存的语言
    getLocalLang() {
        let cKey = ext.G_DEFINE.langLocalStorageKeyDict.sLang;
        let sLang = localStorage.getItem(cKey);
        if (sLang) { //本地存在：根据缓存确定语言
            let lang = JSON.parse(sLang);
            return lang;
        }
        else { //本地不存在：根据浏览器语言版本确定语言
            return null;
        }
    }
    //保存当前语言至本地缓存
    saveLangToLocalStorage() {
        let lang = {
            nId: this.nId,
            cLangPrmt: this.cLangPrmt,
            cLangName: this.cLangName,
            langDB: this.langDB
        };
        let cKey = ext.G_DEFINE.langLocalStorageKeyDict.sLang;
        localStorage.setItem(cKey, JSON.stringify(lang));
    }
    //语言转换
    transform(nLangDbTextIndex, cTextCN) {
        let langDB = this.langDB;
        return langDB[nLangDbTextIndex] ? langDB[nLangDbTextIndex] : cTextCN;
    }
    //当前语言库中的文本字符串转换成'文本 下标'的形式
    setLangDBTextIndexHtml() {
        this.langDB = this.langDB.map((cText, nIndex) => cText.trim().length > 0
            ? `<span class="position-relative">${cText}<small class="position-absolute translate-middle text-danger">${nIndex}</small></span>`
            : '');
    }
    //当语言库中的字符串不是纯文本时提取出纯文本
    static getPureText(cString) {
        let cTextStart = '<span class="position-relative">';
        let cTextEnd = '<small class="position-absolute translate-middle text-danger">';
        let nTextStart = cString.indexOf(cTextStart);
        let nTextEnd = cString.indexOf(cTextEnd);
        if (nTextStart !== -1 && nTextEnd !== -1) {
            return `${cString.substring(cTextStart.length, nTextEnd).trim()}`; //纯文本
        }
        else {
            return cString;
        }
    }
    //当语言库中的字符串不是纯文本时提取出纯文本和下标
    static getPureTextAndIndex(cString) {
        let cTextStart = '<span class="position-relative">';
        let cTextEnd = '<small class="position-absolute translate-middle text-danger">';
        let nTextStart = cString.indexOf(cTextStart);
        let nTextEnd = cString.indexOf(cTextEnd);
        let cIndexStart = 'text-danger">';
        let cIndexEnd = '</small></span>';
        let nIndexStart = cString.indexOf(cIndexStart);
        let nIndexEnd = cString.indexOf(cIndexEnd);
        if (nTextStart !== -1 && nTextEnd !== -1 && nIndexStart !== -1 && nIndexEnd !== -1) {
            return `${cString.substring(cTextStart.length, nTextEnd).trim()} ${cString.substring(nIndexStart + 'text-danger">'.length, nIndexEnd)}`; //'文本 下标'的形式
        }
        else {
            return cString;
        }
    }
}
export { CLang };
