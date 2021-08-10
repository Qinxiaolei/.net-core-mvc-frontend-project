import * as ext from '../export'; //导入外部组件或函数
/**
 * 获得【min,max】之间的一个整数，包含这两个数
 */
function fRandomBy(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
;
/**
 * 随机数生成器
 */
class CRandom {
    constructor() {
        /**
         * (0,1)之间的随机小数；不包括0，1
         */
        this.rand = () => Math.random();
        /**
         * [min,max]之间的随机整数；包括min,max
         */
        this.between = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    }
}
/**
 * 选择器
 */
class CSelector {
    /**
     * 对象集中找具有相同属性的对象，形成新的同属性对象集
     * @param prop 目标属性
     * @param value  目标值
     * @param objArr 对象集；数据源
     */
    static sameKeyValueFromObjArr(prop, value, objArr) {
        let sameKV = [];
        let array = objArr;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element[prop]) {
                if (element[prop] === value) {
                    sameKV.push(element);
                }
            }
        }
        return sameKV;
    }
    /**
     * 属性值去重的子集，往往用于下拉列表
     * 从对象集中统计某属性的值的种类，结果置入数组
     * 统计对象某属性下有多少不同的值
     * @param prop 目标属性
     * @param objArr 对象集
     */
    static diffValueListInPropFromObjArr(prop, objArr) {
        let diffValueList = [];
        if (objArr.length !== 0) {
            let array = objArr;
            diffValueList.push(array[0][prop]);
            for (let index = 1; index < array.length; index++) {
                const element = array[index];
                let isSelected = false;
                if (element[prop]) {
                    for (let j = 0; j < diffValueList.length; j++) {
                        const res = diffValueList[j];
                        if (res === element[prop]) {
                            isSelected = true;
                        }
                    }
                    if (!isSelected) {
                        diffValueList.push(element[prop]);
                    }
                }
            }
        }
        return diffValueList;
    }
    /**
     * 两个无重数组合并；相同项只留一个；这两个数组各自无重值，往往用于数据库检索结果的合并
     * @param arr1 无重数组
     * @param arr2 另一个无重数组
     */
    combineTwoArr(arr1, arr2) {
        let arrRes = arr1;
        for (let i = 0; i < arr2.length; i++) {
            const element = arr2[i];
            let isExist = false;
            for (let j = 0; j < arr1.length; j++) {
                if (arr1[j] === element) {
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                arrRes.push(element);
            }
        }
        return arrRes;
    }
    removeSameItemByOtherArr(arr, otherArr) {
        let arrRes = [];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            let isExist = false;
            for (let j = 0; j < otherArr.length; j++) {
                if (otherArr[j] === element) {
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                arrRes.push(element);
            }
        }
        return arrRes;
    }
    constructor() { }
}
class CSort {
    constructor() { }
    sortBy2DArrMemberAmt(arr2D, arrMemberAmtIn2D) {
        let temp = 0;
        let arr = arrMemberAmtIn2D;
        let idSet = [];
        for (let i = 0; i < arr.length; i++) {
            idSet.push(i);
        }
        //遍历数组，默认arr中的某一个元素为最大值，进行逐一比较
        for (let i = 0; i < arr.length; i++) {
            //外层循环一次，就拿arr[i] 和 内层循环arr.legend次的 arr[j] 做对比
            for (let j = i; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    //如果arr[j]大就把此时的值赋值给最大值变量max
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    temp = idSet[j];
                    idSet[j] = idSet[i];
                    idSet[i] = temp;
                }
            }
        }
        let arrTemp = [];
        for (let i = 0; i < arr.length; i++) {
            arrTemp.push(arr2D[idSet[i]]);
        }
        arr2D = arrTemp;
        return arr2D;
    }
}
class CCie {
    constructor() { }
    //根据ks值得到r值
    getReflPercentByKS(dblKSvalue) {
        let k = dblKSvalue;
        let ReflbyKS = 1.0;
        if (k != 0.0) {
            ReflbyKS = 1.0 + Math.abs(k) - k * Math.sqrt(1.0 + 2.0 / Math.abs(k));
        }
        return Math.round(ReflbyKS * 10000) / 100; //保留二位有效数字
    }
    //根据ks值数组得到r值数组
    getArrReflPercentByArrKS(arrKS) {
        let nArrReflPercent = [];
        for (let index = 0; index < arrKS.length; index++) {
            const dblKSvalue = arrKS[index];
            nArrReflPercent.push(this.getReflPercentByKS(dblKSvalue));
        }
        return nArrReflPercent;
    }
    //根据r值得到ks值
    getKSByReflPercent(dblReflectPercent) {
        let r = dblReflectPercent / 100.0; //r = dblRefl / 100 '百分数归一
        let KSbyRefl = 999999;
        if (r > 0)
            KSbyRefl = ((1 - r) * Math.abs(1 - r)) / 2 / r;
        return KSbyRefl;
    }
    //根据r值数组得到ks值数组
    getArrKSPercentByArrRefl(arrRefl) {
        let nArrKS = [];
        for (let index = 0; index < arrRefl.length; index++) {
            const dblKSvalue = arrRefl[index];
            nArrKS.push(this.getKSByReflPercent(dblKSvalue));
        }
        return nArrKS;
    }
    mockRefl() {
        let rKS = [1.81, 2.14, 2.62, 3.32, 4.26, 5.44, 6.89, 8.44, 10.04, 11.4, 12.5, 13.02, 13.18, 12.91, 11.91, 10.11, 7.53, 4.69, 2.47, 1.13, 0.48, 0.19, 0.07, 0.03, 0.01, 0, 0, 0, 0, 0.01, 0.01];
        let gKS = [13.02, 15.41, 16.68, 17.13, 16.74, 15.68, 13.22, 8.6, 3.38, 1.08, 0.4, 0.2, 0.13, 0.1, 0.09, 0.08, 0.07, 0.06, 0.06, 0.05, 0.05, 0.04, 0.04, 0.03, 0.03, 0.02, 0.02, 0.02, 0.01, 0.01, 0.01];
        let bKS = [2.03, 1.44, 0.84, 0.45, 0.3, 0.27, 0.3, 0.35, 0.46, 0.62, 0.86, 1.22, 1.75, 2.53, 3.69, 5.37, 7.65, 10.39, 13.14, 15.63, 17.46, 18.78, 19.17, 18.39, 16.38, 12.25, 7.24, 3.57, 1.63, 0.76, 0.36];
        let rRand = new ext.CMath().random.between(0, 5); //源数据偏浅
        let gRand = new ext.CMath().random.between(0, 5.5 - rRand);
        let bRand = 5 - rRand - gRand;
        let mockRefl = [];
        let deep = new ext.CMath().random.between(3, 10) / 6 / 5;
        for (let index = 0; index < rKS.length; index++) {
            let mockKS = rKS[index] * rRand + gKS[index] * gRand + bKS[index] * bRand;
            mockRefl[index] = this.getReflPercentByKS(mockKS * deep);
        }
        return mockRefl;
    }
}
class CGuasscurve {
    constructor(nCharacteristicWavelength = 420, nHalfWidth = 50, nHeight = 10, nBaseLine = 0) {
        this.b = nCharacteristicWavelength;
        this.d = nHalfWidth;
        this.c = nHeight;
        this.base = nBaseLine;
    }
    setCharacteristicWL(nCharacteristicWavelength) {
        this.b = nCharacteristicWavelength;
        return this;
    }
    setHalfPeakWidth(nHalfWidth) {
        this.d = nHalfWidth;
        return this;
    }
    setPeakHeigh(nHeight) {
        this.c = nHeight;
        return this;
    }
    setBaseLine(nBaseLine) {
        this.base = nBaseLine;
        return this;
    }
    get31KSs() {
        let narrKS = [];
        for (let index = 0; index < 31; index++) {
            let wl = 400 + index * 10;
            let ks = this.c * Math.exp((-4 * Math.log10(2)) * Math.pow((wl - this.b) / this.d, 2)) + this.base;
            narrKS.push(ks);
        }
        return narrKS;
    }
    get31Refl() {
        let arrReflRes = [];
        let arr31KS = this.get31KSs();
        for (let index = 0; index < arr31KS.length; index++) {
            arrReflRes.push(new CCie().getReflPercentByKS(arr31KS[index]));
        }
        return arrReflRes;
    }
}
class CNumberBaseConversion {
    constructor(nRandom = 0, nSkip = 5) {
        this._encSkipConst = 7; //跳位取值
        this._encDecDefaultDic = 'Base256';
        this._Base2 = '01';
        this._Base8 = '01234567';
        this._Base10 = '0123456789';
        this._Base16 = '0123456789abcdef';
        this._Base26 = 'abcdefghigklmnopqrstuvwxyz'; //小写字母
        this._Base32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; //	不包含 ILOU 字符；http://www.crockford.com/wrmg/base32.html
        this._Base37 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ*~$=U'; //	http://www.crockford.com/wrmg/base32.html
        this._Base52 = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; //	小写字母+大写字母
        this._Base58 = '123456789abcdefghigkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'; //	不包含 0OlI 字符
        this._Base41 = '3456789abdefghigmnpqrtuyABDEFGHJLMNPQRTUY'; //	不包含 012zZvVwWoOlI 等易混淆键盘字符
        this._Base62 = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; //	数字 + 小写字母+大写字母
        this._Base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789+/'; //进制规范文档：The Base16, Base32, and Base64 Data Encodings 。http://tools.ietf.org/html/rfc4648
        this._Base64Url = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789-_'; //URL 文件名安全型
        this._Base128ASCII = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789αβγδεζηθλμξπρστφχψωāáǎàōóǒòêēéěèīíǐìūúǔùǖǘǚǜü~!≠≈∞%^&*_+:;<>?|-=[]'; //cx自定义；去了易混字符和小数点
        this._Base256 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz'
            + '0123456789αβγδεζηθλμξπρστφχψωāáǎàōóǒòêēéěèīíǐìūúǔùǖǘǚǜü'
            + '~!@#$%^&*_+:;<>?|-=[](){}'
            + 'ぁぃぅぇぉかきくけこんさしすせそたちつってとゐなにぬねのはひふへほゑまみむめもゃゅょゎを'
            + 'ァィゥヴェォカヵキクケヶコサシスセソタチツッテトヰンナニヌネノハヒフヘホヱマミムメモャュョヮヲ'
            + '§№☆★○●◎◇◆□■△▲※→←↑↓↖↗↘↙∫≠≤≥≈∞￥‰℃¤￠'; //cx自定义；
        this._encLoopNumber = nRandom;
        this._encSkipConst = nSkip;
    }
    setEncLoopNumber(nRandom) {
        this._encLoopNumber = nRandom;
        return this; //可以链式操作
    } //设置循环加密次数；
    setEncDecDefaultDic(cBase) {
        this._encDecDefaultDic = cBase;
        return this; //可以链式操作
    } //设置循环加密次数；
    example() {
        //加密
        let enc = this.convertBase('9234567890123456', '10', '10', 3, 0);
        //解密
        let dyt = this.convertBase(enc, '10', '10', 0, 3);
        //数字缩短
        let sShortNum = '';
        // sShortNum = this.convertBase('123456789012345', '58', '10', 0, 0);
        // sShortNum = this.convertBase('123456789012345', '256', '10', 0, 0);
        for (let index = 0; index < 5; index++) {
            const element = this.getUUid(); //getUdid();
            sShortNum += element.toString() + '  ][  ';
        }
        let encUrl = this.EncDecBySeedCode('https://fanyi.baidu.com/#zh/en/%E5%8A%A0%E8%A7%A3%E5%AF%86', 3);
        return this.EncDecBySeedCode(encUrl, 0, 3);
    }
    ;
    getBaseNumber(cBaseNumber) {
        let cRes = '';
        switch (cBaseNumber.toUpperCase()) {
            case '2':
            case 'BIN':
            case 'BINARY':
            case 'BASE2':
                cRes = this._Base2;
                break;
            case '8':
            case 'OCT':
            case 'OCTAL':
            case 'BASE8':
                cRes = this._Base8;
                break;
            case '10':
            case 'DEC':
            case 'DECIMAL':
            case 'BASE10':
                cRes = this._Base10;
                break;
            case '16':
            case 'HEX':
            case 'HEXADECIMAL':
            case 'BASE16':
                cRes = this._Base16;
                break;
            case '26':
            case 'BASE26':
                cRes = this._Base26;
                break;
            case '32':
            case 'BASE32':
                cRes = this._Base32;
                break;
            case '37':
            case 'BASE37':
                cRes = this._Base37;
                break;
            case '41':
            case 'BASE41':
                cRes = this._Base41;
                break;
            case '52':
            case 'BASE52':
                cRes = this._Base52;
                break;
            case '58':
            case 'BASE58':
                cRes = this._Base58;
                break;
            case '62':
            case 'BASE62':
                cRes = this._Base62;
                break;
            case '64':
            case 'BASE64':
                cRes = this._Base64;
                break;
            case '64U':
            case '64F':
            case 'BASE64URL':
            case 'BASE64FILE':
            case 'BASE64FILENAME':
                cRes = this._Base64Url;
                break;
            case '128':
            case 'BASE128ASCII':
            case 'BASE128':
                cRes = this._Base128ASCII;
                break;
            case '256':
            case 'BASE256':
                cRes = this._Base256;
                break;
            default:
                break;
        }
        return cRes.split('');
    } //获取字典
    getRandomCode(cBaseNumber) {
        let carrRes = this.getBaseNumber(cBaseNumber);
        for (let m = 0; m < this._encLoopNumber; m++) {
            let arrayBak = [];
            carrRes.forEach(element => arrayBak.push(element));
            carrRes = [];
            let array = [];
            for (let n = 0; n < this._encLoopNumber; n++) {
                array = [];
                arrayBak.forEach(element => array.push(element));
                let nSkip = this._encSkipConst;
                let nLen = array.length;
                if (nSkip > nLen)
                    nSkip = nLen % nSkip;
                for (let index = 0; index < nLen; index++) {
                    let id = index * nSkip;
                    if (id > nLen - 1)
                        break;
                    carrRes.push(array[id]);
                    arrayBak.splice(id - index, 1);
                }
            }
            arrayBak.forEach(element => carrRes.push(element));
            carrRes.reverse();
        }
        return carrRes;
    } //获取种子数打乱的乱码数组
    convertBase(cNumber, cBaseRes, cBaseSrc = '10', nRandomRes = 0, nRandomSrc = 0) {
        let carrSrcDic = this.setEncLoopNumber(nRandomSrc).getRandomCode(cBaseSrc);
        let nSrcBase = carrSrcDic.length;
        let carrResDic = this.setEncLoopNumber(nRandomRes).getRandomCode(cBaseRes);
        let nResBase = carrResDic.length;
        let carrSrc = cNumber.split('');
        let nLen = carrSrc.length;
        if (nSrcBase === 0 || nResBase === 0 || nLen === 0)
            return '';
        let nBaseDEC = 1; //十进制转换
        let nNumberDEC = 0; //十进制转换
        // alert([nSrcBase, nResBase, nLen, carrSrcDic.toString(), carrResDic.toString(), nNumberDEC])
        for (let index = 0; index < nLen; index++) {
            const element = carrSrc[nLen - 1 - index];
            let nId = -1;
            for (let id = 0; id < carrSrcDic.length; id++) {
                if (carrSrcDic[id] === element) {
                    nId = id;
                    break;
                }
            }
            if (nId < 0) {
                return '';
            }
            else {
                nNumberDEC += nBaseDEC * nId;
                nBaseDEC *= nSrcBase;
            }
        }
        // alert([nNumberDEC, nResBase])
        let carrRes = [];
        while (nNumberDEC !== 0) {
            let nDivide = Math.floor(nNumberDEC / nResBase);
            let nMOD = nNumberDEC % nResBase;
            carrRes.unshift(carrResDic[nMOD]);
            nNumberDEC = nDivide;
        }
        return carrRes.join('');
    }
    EncDecBySeedCode(cSrc, nSeedCodeRes = 3, nSeedCodeSrc = 0, cBase = '') {
        if (cBase.length === 0)
            cBase = this._encDecDefaultDic;
        let carrSrcDic = this.setEncLoopNumber(nSeedCodeSrc).getRandomCode(cBase);
        let nSrcBase = carrSrcDic.length;
        let carrResDic = this.setEncLoopNumber(nSeedCodeRes).getRandomCode(cBase);
        let nResBase = carrResDic.length;
        let carrSrc = cSrc.split('');
        let nLen = carrSrc.length;
        if (nSrcBase === 0 || nResBase === 0 || nLen === 0)
            return '';
        let carrRes = [];
        for (let index = 0; index < nLen; index++) {
            const element = carrSrc[index];
            let nId = -1;
            for (let id = 0; id < carrSrcDic.length; id++) {
                if (carrSrcDic[id] === element) {
                    nId = id;
                    break;
                }
            }
            if (nId < 0) {
                carrRes.push(element);
            }
            else {
                carrRes.push(carrResDic[nId]);
            }
        }
        return carrRes.join('');
    } //乱码加密
    getUUid() {
        return this.convertBase(this.getUdid().toString(), '256', '10', 0, 0);
    } //随机字串
    getUdid() {
        let sRand = new CMath().random.between(100, 999).toString() + new Date().getTime().toString().split('').reverse().join('');
        let nEncLoopNum = new CMath().random.between(1, 9);
        let cChrRand = this.getRandomCode('10')[nEncLoopNum];
        return cChrRand + this.convertBase(sRand, '10', '10', nEncLoopNum, 0);
    } //随机字串
} //进制转换;带乱码参数 ；实现字符压缩和乱码加密
/**Math方法集 */
class CMath {
    constructor() {
        this.pi = 3.1415926;
        /**
         * 随机函数集
         */
        this.random = new CRandom();
        this.selector = new CSelector();
        this.sort = new CSort();
        this.cie = new CCie();
        this.guasscurve = new CGuasscurve();
        this.baseNum = new CNumberBaseConversion();
    }
}
export { CSelector, CMath, fRandomBy }; //export default语句在二次导出时好象不能用
//   // alert(Algorithm.fRandomBy(0, 10));
