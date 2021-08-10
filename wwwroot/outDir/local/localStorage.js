import { CLang } from '../language/language';
/**
 * 本地贮存
 * 本地贮存：配置；默认值；最后一次UI参数；足迹（配置参数集）
 * 本地贮存：删查改；增通过规划进常量localStorageKeyArr来解决
 */
class CLocalStorage {
    constructor() {
        this.oKeys = {
            'sPageSnapshot': 'sPageSnapshot',
            'sLoginInfoSet': 'sLoginInfoSet',
            'accountUserPwSet': 'accountUserPwSet',
            'syLoginInfo': 'syLoginInfo',
            'sColorDiffReport': 'sColorDiffReport', //一对一色差本报告
        };
    }
    getItem(key) {
        let value = '';
        if (this.oKeys.hasOwnProperty(key)) {
            value = localStorage.getItem(key);
        }
        return value;
    }
    setStrItem(key, value) {
        if (this.oKeys.hasOwnProperty(key)) {
            localStorage.setItem(key, value);
        }
        else {
            alert(`${CLang.trans('未规划')}：${key}`);
        }
    }
    setObjItem(key, obj) {
        let value = JSON.stringify(obj);
        if (this.oKeys.hasOwnProperty(key)) {
            localStorage.setItem(key, value);
        }
        else {
            alert(`${CLang.trans('未规划')}：${key}`);
        }
    }
    removeItem(key) {
        if (this.oKeys.hasOwnProperty(key)) {
            localStorage.removeItem(key);
        }
        else {
            alert(`${CLang.trans('未规划')}：${key}`);
        }
    }
    clear() {
        for (const key in this.oKeys) {
            localStorage.removeItem(key);
        }
    }
}
export { CLocalStorage };
