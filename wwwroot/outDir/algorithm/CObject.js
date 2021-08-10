/**
 * 拷贝相同的属性；相同的属性赋值
 * @param oSrc 源对象
 * @param oAim 目标对象
 */
function copyProperties(oSrc, oAim) {
    for (const key in oSrc) {
        if (oAim.hasOwnProperty(key)) {
            let typeSrc = Object.prototype.toString.call(oSrc[key]);
            let typeAim = Object.prototype.toString.call(oAim[key]);
            if (typeSrc === typeAim) {
                if (typeSrc === '[object Object]') {
                    copyProperties(oSrc[key], oAim[key]);
                }
                else {
                    oAim[key] = oSrc[key];
                }
            }
            else {
                if (typeAim.indexOf('Null') > -1) {
                    oAim[key] = oSrc[key];
                }
            }
        }
    }
}
/**将对象转为JSON字串
 *
 * @param oSrc
 */
function transObjectToJsonStringify(oSrc) {
    let sJson = JSON.stringify({ key: oSrc });
    let start = '{"key":'.length;
    let end = sJson.length - ("}".length);
    return sJson.substring(start, end);
}
export { copyProperties, transObjectToJsonStringify };
// interface IAAA {
//   a: string;
//   b: string;
//   c: { a: string; b: number }
// }
// interface IAA {
//   a: string;
//   b: string
// }
// interface IAAC {
//   a: string;
//   b: number;
//   c: IAA
// }
// let oAaaa: IAAA = { a: 'aa', b: 'bb', c: { a: 'mm', b: 2 } };
// let oAa: IAA = { a: 'oaa', b: 'oaab' };
// let oAc: IAAC = { a: '1', b: 2, c: oAa };
// alert(JSON.stringify(oAc))
// copyProperties(oAaaa, oAc);
// alert(JSON.stringify(oAc))
