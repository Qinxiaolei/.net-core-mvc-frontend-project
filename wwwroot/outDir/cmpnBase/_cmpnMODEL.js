import * as ext from '../export'; //导入外部组件或函数
import { CClsBase } from '../cmpnBase/ccbase';
//导入示例
//import {CExampleBase_DEFAULT,IExampleBase,CExampleBase} from '../../ts/cmpnBase/ExampleBase'
/**
 * 组件类的通用模板
 * 绝大部分不用修改
 * 确定类名
 * 以数据为中心确定默认值
 * 定义常量
 * 定义方法函数
 */
export const CExampleBase_DEFAULT = {
    CID: {
        cUDID: '',
        nChildCount: 0,
        cContainerID: '' //组件的UI容器的id
    },
    Prmt: { //组件参数
    },
    RunningState: { //组件的运行状态
    }
};
const S_DEFINE = { //字典集；自定义常量集
};
const S_METHOD = {
    fnExample: function (oThis) { }
};
const SP_METHOD = { //私有的静态方法集（private static；private：私有属性/方法，只能在此类中访问，如果需要在其他类中访问，必须通过get/set方法）
};
const S_ACTION = {
    fnExample: function (oThis) { }
};
const S_AJAX = {
    fnExample: function (oThis) { }
};
const S_LOCALSTORAGE = {
    fnExample: function (oThis) { }
};
//仅更类名“ExampleBase”,,模 板代码，几乎不用更改；----------------------------------------------------begin
class CExampleBase_Model {
    constructor() {
        this.CID = CExampleBase_DEFAULT.CID;
        this.Prmt = CExampleBase_DEFAULT.Prmt;
        this.RunningState = CExampleBase_DEFAULT.RunningState;
    }
} //根据数据中心默认值定义类，再根据类定义接口；好处：默认值有变化时，可以自动生成相对应的接口，不需要重新修改接口
export class CExampleBase extends CClsBase {
    constructor(oDefault = null) {
        super(); //派生类的构造函数中必须调用super，且super语句必须在第一个this前
        if (!oDefault)
            oDefault = JSON.parse(JSON.stringify(CExampleBase_DEFAULT));
        this.CID = oDefault.CID;
        this.Prmt = oDefault.Prmt;
        this.RunningState = oDefault.RunningState;
    }
    setCID(CID) {
        this.CID = CID;
        return this;
    }
    ;
    setPrmt(Prmt) {
        this.Prmt = Prmt;
        return this;
    }
    setRunningState(RunningState) {
        this.RunningState = RunningState;
        return this;
    }
    static getDefault() { return JSON.parse(JSON.stringify(CExampleBase_DEFAULT)); } //得到组件的默认值
    setUdid(cUDID) {
        this.CID.cUDID = cUDID;
        return this;
    } //设置该组件的唯一标识符
    getChildUDID() {
        return ext.CCID.getChildUDID(this.CID);
    } //派生子组件的唯一标识符
    getOwnIPrmt() {
        return JSON.parse(ext.CClsBase.stringify(this));
    } //获取组件自身的接口参数
    //仅更类名“ExampleBase”,,模 板代码，几乎不用更改；----------------------------------------------------end
    //侦听UI
    on() {
        let oThis = this;
        gMEMO.on.fnExample = function () { CExampleBase.s_action.fnExample(oThis); };
        //UI中绑定的侦听的函数需要先在gMEMO的侦听函数集on中注册，然后才可以通过gMEMO.on.fn()的方式调用
    }
    //渲染UI
    renewUI() {
        let oThis = this;
    }
    //可以根据本地储存/预设值/默认值来更改状态实现初始化
    init(nSelect) {
        let oThis = this;
    }
}
CExampleBase.s_define = S_DEFINE; //字典集；自定义常量集
CExampleBase.s_method = S_METHOD; //方法集；内联函数集
CExampleBase.sp_method = SP_METHOD; //静态方法集；内联函数集
CExampleBase.s_action = S_ACTION; //侦听函数的实现方法；同步侦听函数
CExampleBase.s_ajax = S_AJAX; //异步函数集；远程服务函数集
CExampleBase.s_localStorage = S_LOCALSTORAGE; //本地储存函数集
