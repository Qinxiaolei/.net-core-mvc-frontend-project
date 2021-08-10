import * as ext from '../../export'; //导入外部组件或函数
import { CClsBase } from '../../cmpnBase/ccbase';
import { S_DEFINE } from './S_DEFINE';
import { DEFAULT } from './DEFAULT';
import { S_METHOD } from './S_METHOD';
import { SP_METHOD } from './SP_METHOD';
import { S_ACTION } from './S_ACTION';
import { S_AJAX } from './S_AJAX';
import { S_LOCALSTORAGE } from './S_LOCALSTORAGE';
import { UIE } from './S_UIE';
//仅更类名“ExampleBase”,,模 板代码，几乎不用更改；----------------------------------------------------begin
class CExampleBase_Model {
    constructor() {
        this.CID = DEFAULT.CID;
        this.Prmt = DEFAULT.Prmt;
        this.RunningState = DEFAULT.RunningState;
    }
}
export class CExampleBase extends CClsBase {
    constructor(oDefault = null) {
        super();
        this.Uie = UIE;
        if (!oDefault)
            oDefault = JSON.parse(JSON.stringify(DEFAULT));
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
    static getDefault() { return JSON.parse(JSON.stringify(DEFAULT)); }
    setUdid(cUDID) {
        this.CID.cUDID = cUDID;
        return this;
    } //设置该组件的识别符
    getChildUDID() {
        return ext.CCID.getChildUDID(this.CID);
    } //派生子组件的dirID;
    getOwnIPrmt() {
        return JSON.parse(CClsBase.stringify(this));
    } //获取自身的接口参数
    //仅更类名“ExampleBase”,,模 板代码，几乎不用更改；----------------------------------------------------end
    on() {
        let oThis = this;
        // let virDom = (gMEMO as ext.IGMemo).oVirDom;
        // ((gMEMO as ext.IGMemo).on as ext.IOnGMEMO).fnExample = function () { CExampleBase.s_action.fnExample(oThis); };
    }
    renewUI() {
        let oThis = this;
        let eContainer = document.getElementById(oThis.CID.cContainerID);
        if (eContainer) {
            eContainer.innerHTML = oThis.getHtml();
            setTimeout(() => oThis.on(), 200);
        }
    }
    ini(nSelect) { } //可以根据本地储存/预设值/默认值来更改状态实现初始化
    getHtml() {
        let oThis = this;
        let cHtml = ``;
        return cHtml;
    }
}
CExampleBase.s_define = S_DEFINE; //Dictionaries；字典；自定义常量
CExampleBase.s_method = S_METHOD; //方法集；内联函数集funA: () => { }
CExampleBase.sp_method = SP_METHOD; //方法集；内联函数集funA: () => { }
CExampleBase.s_action = S_ACTION; //侦听函数的实现方法；同步侦听函数funA: () => { } 
CExampleBase.s_ajax = S_AJAX; //异步函数；远程服务函数 funA: () => { }
CExampleBase.s_localStorage = S_LOCALSTORAGE; //funA: () => { }
