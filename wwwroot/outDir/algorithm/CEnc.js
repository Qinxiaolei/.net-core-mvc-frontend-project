/**
 * 字典;加解密
 */
class CEncryption {
    /**
     *
     *通过密码表和字典表的互替进行解密和加密
     *
     * @param nArr1 数字乱码表；密码表；解密时用nArr2同index的值替换；
     * @param nArr2 数字字典表顺序表，加密时用numberArray1同index的值替换；
     * @param cArr1 小写字母顺序表;解密时用cArr2同index的值替换；
     * @param cArr2 大写字母乱码表;加密时用cArr1同index的值替换；
     */
    constructor(nArr1 = [], // = [8, 9, 1, 7, 3, 4, 0, 6, 2, 5]; 加上转位号可以增加加密的效果
    nArr2 = [], // = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    cArr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], cArr2 = ['R', 'V', 'B', 'K', 'T', 'N', 'L', 'C', 'H', 'I', 'Q', 'X', 'E', 'G', 'D', 'M', 'P', 'A', 'Z', 'Y', 'J', 'W', 'F', 'U', 'O', 'S']) {
        this.nArr1 = [];
        this.nArr2 = [];
        this.cArr1 = [];
        this.cArr2 = [];
        this.cArr1 = cArr1;
        this.cArr2 = cArr2;
        if (this.nArr2.length === 0) {
            let array = [];
            for (let i = 0; i < 4 + 6; i++) {
                array.push(i);
            }
            this.nArr2 = array;
        }
        else {
            this.nArr2 = nArr2;
        }
        if (this.nArr1.length !== this.nArr2.length) {
            let a = '222';
            let b = 931;
            let c = (Number(a + b.toString()) * 4 * 10000 + 25 * 25 + 10).toString().split('');
            for (let i = 0; i < c.length; i++) {
                this.nArr1.push(Number(c[i]));
            }
        }
        else {
            this.nArr1 = nArr1;
        }
    }
    /**
     * 乱码加密
     * @param cStr
     */
    encrypt(cStr) {
        if (cStr.length === 0)
            return cStr;
        let oThis = this;
        let cArr = [];
        for (let j = 0; j < cStr.length; j++) {
            let c = cStr.charAt(j);
            if (/^[0-9]+$/.test(c)) { //如果是数字
                for (let i = 0; i < oThis.nArr1.length; i++) {
                    if (c === oThis.nArr1[i].toString()) {
                        cArr.push(oThis.nArr2[i] + '');
                    }
                }
            }
            else if (/[a-z]/.test(c)) { //如果是小写字母
                let cUpper = c.toUpperCase(); //转大写
                for (let i = 0; i < oThis.cArr2.length; i++) {
                    if (cUpper === oThis.cArr2[i]) {
                        cArr.push(oThis.cArr1[i]);
                    }
                } //如果是大写字母
            }
            else if (/[A-Z]/.test(c)) {
                let cLower = c.toLowerCase(); //转小写
                for (let i = 0; i < oThis.cArr1.length; i++) {
                    if (cLower === oThis.cArr1[i]) {
                        cArr.push(oThis.cArr2[i]);
                    }
                }
            }
            else { //不转换
                cArr.push(c);
            }
        }
        let cNew = cArr[0];
        for (let i = 1; i < cArr.length; i++) {
            cNew += cArr[i];
        }
        return cNew;
    }
    /**
     * 解密
     * @param str
     */
    decrypt(cStr) {
        if (cStr.length === 0)
            return cStr;
        let oThis = this;
        let cArr = [];
        for (let j = 0; j < cStr.length; j++) {
            let c = cStr.charAt(j);
            if (/^[0-9]+$/.test(c)) {
                for (let i = 0; i < oThis.nArr2.length; i++) {
                    if (c === oThis.nArr2[i].toString()) {
                        cArr.push(oThis.nArr1[i] + '');
                    }
                }
            }
            else if (/[a-z]/.test(c)) {
                for (let i = 0; i < oThis.cArr1.length; i++) {
                    if (c === oThis.cArr1[i]) {
                        cArr.push(oThis.cArr2[i].toLowerCase());
                    }
                }
            }
            else if (/[A-Z]/.test(c)) {
                for (let i = 0; i < oThis.cArr2.length; i++) {
                    if (c === oThis.cArr2[i]) {
                        cArr.push(oThis.cArr1[i].toUpperCase());
                    }
                }
            }
            else {
                cArr.push(c);
            }
        }
        let cNew = cArr[0];
        for (let i = 1; i < cArr.length; i++) {
            cNew += cArr[i];
        }
        return cNew;
    }
}
export { CEncryption };
//测试
// alert(new CEncryption().encrypt('123456'));
