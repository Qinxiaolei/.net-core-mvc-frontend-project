/**
 * 基类
 * 定义了组件类的属性和一些最基本的函数
 * 定义了ajax返回的基本接口
 */
import * as ext from '../export'; //导入外部组件或函数
export class CClsBase {
    constructor() {
        this.CID = JSON.parse(JSON.stringify(ext.CCID_DEFAULT)); //类标识；子类标识生成器
        this.Prmt = {}; //服务端参数
        this.RunningState = {}; //运行状态
    }
    static stringify(oThis) {
        let sJson = JSON.stringify({ key: oThis });
        let start = '{"key":'.length;
        let end = sJson.length - ("}".length);
        return sJson.substring(start, end);
    }
    ; //获取该类的状态数据；序列化该类或其派生类的JSON字串
    static parse(sJSON, oNew) {
        let oJSON = JSON.parse(sJSON);
        ext.copyProperties(oJSON, oNew);
        return oNew;
    }
    ; //反序列化；重建该类;此处T可以为其派生类
}
CClsBase.s_define = {}; //Dictionaries；字典；自定义常量
CClsBase.s_method = {}; //方法集；内联函数集 funA: () => { }
CClsBase.sp_method = {}; //私有方法集；内联函数集 funA: () => { }
CClsBase.s_action = {}; //侦听函数的实现方法；同步侦听函数 funA: () => { } 
CClsBase.s_ajax = {}; //异步函数；远程服务函数 funA: () => { }
CClsBase.s_localStorage = {}; //本地储存函数集 funA: () => { }
