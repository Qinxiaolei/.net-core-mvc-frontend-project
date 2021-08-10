/**
 * 优先使用原生的JSON.stringify;parse;join();在出现错误时，再用本方法
 *
 * 数组的成员为JSON.stringify字串时，若JSON对象的值中存在逗号，序列化与逆操作时会出错
 *
 * 序列化数组
 * 通过重新定义连接符来序列化字符串，以解决原JSON.stringtify含有逗号等特殊字符形成的字串不能逆操作的缺陷。
 */
class CJson {
    constructor() {
        let EJoinCode;
        (function (EJoinCode) {
            EJoinCode["numArr"] = "[/,/]";
            EJoinCode["strArr"] = "[/s/]";
            EJoinCode["objArr"] = "[/~/]";
        })(EJoinCode || (EJoinCode = {}));
        this._eJoinCode = EJoinCode;
    }
    //判断是否是JSON字串
    static isJSONStringify(str) {
        if (typeof str == 'string') {
            try {
                var obj = JSON.parse(str);
                if (typeof obj == 'object' && obj) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
export { CJson };
