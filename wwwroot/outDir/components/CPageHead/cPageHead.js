import * as ext from '../../export'; //导入外部组件或函数
import { CClsBase } from '../../cmpnBase/ccbase';
import { CLang } from '../../language/language';
import { S_DEFINE } from './S_DEFINE';
import { DEFAULT } from './DEFAULT';
import { S_METHOD } from './S_METHOD';
import { SP_METHOD } from './SP_METHOD';
import { S_ACTION } from './S_ACTION';
import { S_AJAX } from './S_AJAX';
import { S_LOCALSTORAGE } from './S_LOCALSTORAGE';
import { UIE } from './S_UIE';
/**
 * 页头组件
 */
//仅更类名“ExampleBase”,,模 板代码，几乎不用更改；----------------------------------------------------begin
class CPageHead_Model {
    constructor() {
        this.CID = DEFAULT.CID;
        this.Prmt = DEFAULT.Prmt;
        this.RunningState = DEFAULT.RunningState;
    }
}
export class CPageHead extends CClsBase {
    constructor(oDefault = null) {
        super();
        this.Uie = UIE;
        if (!oDefault)
            oDefault = JSON.parse(JSON.stringify(DEFAULT));
        this.CID = oDefault.CID;
        this.Prmt = oDefault.Prmt;
        this.RunningState = oDefault.RunningState;
        //刷新时间UI
        setInterval(() => {
            this.RunningState.cTime = `${new ext.CDate(Date.now()).getDateString('mm-dd HH:mm:ss w')}`;
            this.renewTimeUI();
        }, 1000);
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
        //打开登录模态框
        gMEMO.on.openLoginModal = function () {
            ext.CLogin.s_action.openModal();
        };
        //退出
        gMEMO.on.logout = function () {
            ext.CLogin.s_action.logout();
        };
        //填写页头中的搜索框
        gMEMO.on.syncHeaderSearchStr = function (cValue) {
            S_ACTION.syncHeaderSearchStr(cValue);
        };
        //页头中的搜索框回车事件
        gMEMO.on.headerSearchInputEnter = function (event) {
            if (event && event.key && event.key.toUpperCase() === 'ENTER')
                S_ACTION.handleHeaderSearchBtnClick();
        };
        //点击页头中的搜索按钮
        gMEMO.on.handleHeaderSearchBtnClick = function () {
            S_ACTION.handleHeaderSearchBtnClick();
        };
    }
    renewUI() {
        let oThis = this;
        let eContainer = document.getElementById(oThis.CID.cContainerID);
        if (eContainer) {
            eContainer.innerHTML = oThis.getHtml();
            setTimeout(() => oThis.on(), 200);
        }
    }
    //刷新搜索框UI
    renewSearchIptUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cSearchIptCId);
        if (eContainer)
            eContainer.innerHTML = oThis.getSearchIptHtml();
    }
    //刷新时间显示区UI
    renewTimeUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cTimeCId);
        if (eContainer)
            eContainer.innerHTML = oThis.getTimtHtml();
    }
    ini(nSelect) { } //可以根据本地储存/预设值/默认值来更改状态实现初始化
    //登录员真实姓名html
    getUserFullNameHtml() {
        let oThis = this;
        let cUserFullName = oThis.Prmt.cUserFullName;
        let cHtml = cUserFullName.length === 0 ? UIE.请登录 : cUserFullName;
        return cHtml;
    }
    //导航栏Html
    getNavHtml() {
        let oThis = this;
        let isLogged = oThis.RunningState.isLogged; //是否已登录
        let cDisabled = isLogged ? '' : 'disabled';
        let eleIdDict = S_DEFINE.elementIdDict;
        let cHtml = `
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <button
                    onclick="gMEMO.on.openLoginModal();"
                    type="button"
                    class="btn btn-link shadow-none"
                    title="${CLang.getPureTextAndIndex(UIE.登录)}"
                >
                    <i class="fal fa-user-circle"></i>
                    <span id="${eleIdDict.cUserFullNameCId}">
                        ${oThis.getUserFullNameHtml()}
                    </span>
                </button>
            </li>
            <li class="nav-item dropdown">
                <button type="button" class="btn btn-link dropdown-toggle shadow-none" data-bs-toggle="dropdown" ${cDisabled}>
                    ${UIE.更多}
                </button>
                <ul class="dropdown-menu dropdown-menu-right" id="${eleIdDict.cMPDrpdwnMenuCId}">
                    <li><button class="dropdown-item" type="button">Action</button></li>
                    <li><button class="dropdown-item" type="button">Another action</button></li>
                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                </ul>
            </li>
            <li class="nav-item">
                <button onclick="gMEMO.on.logout();" type="button" class="btn btn-link shadow-none" ${cDisabled}>
                    ${UIE.退出}
                </button>
            </li>
        </ul>`;
        return cHtml;
    }
    //搜索框Html
    getSearchIptHtml() {
        let oThis = this;
        let isSearchIptShow = oThis.RunningState.isSearchIptShow;
        let eleIdDict = S_DEFINE.elementIdDict;
        let cHtml = `
        <div class="input-group w-100 py-3 px-4 ${isSearchIptShow ? '' : 'invisible'}" id="${eleIdDict.cHeaderSearchIptCId}">
            <input 
                oninput="gMEMO.on.syncHeaderSearchStr(this.value);" 
                onkeyup="gMEMO.on.headerSearchInputEnter(event);"
                type="text" 
                class="form-control"
                autocomplete="off"
                auto-complete="off"
                autocomplete="new-password"
                value="${oThis.Prmt.cSearchStr}"
                id="${eleIdDict.cHeaderSearchIptId}"
            >
            <button 
                onclick="gMEMO.on.handleHeaderSearchBtnClick();"
                class="btn btn-light px-4 border"
                type="button"
            >
                <i class="far fa-search me-2"></i>${UIE.搜索}
            </button>
        </div>`;
        return cHtml;
    }
    //时间html
    getTimtHtml() {
        let oThis = this;
        let cHtml = `
        <div class="py-3">
            ${oThis.RunningState.cTime}
        </div>`;
        return cHtml;
    }
    getHtml() {
        let oThis = this;
        let eleIdDict = S_DEFINE.elementIdDict;
        let cHtml = `
        ${oThis.getNavHtml()}
        <div class="container-fluid">
            <div class="row align-items-center" style="background: url(./Image/banner-bg.jpg);">
                <div class="col-md-5 col-lg-4 col-xl-3 px-0">
                    <a href="Home" target="_top" title="EliColorHomePage">
                        <img class="m-3" src="./Image/Elicolor_Logo.svg" alt="EliColorHomePage" />
                    </a>
                </div>
                <div class="col-md" id="${eleIdDict.cSearchIptCId}">
                    ${oThis.getSearchIptHtml()}
                </div>
                <div class="col-lg-2 col-xl-3 align-self-end text-end ps-0 pe-4 d-none d-lg-block" id="${eleIdDict.cTimeCId}">
                    ${oThis.getTimtHtml()}
                </div>
            </div>
        </div>`;
        return cHtml;
    }
}
CPageHead.s_define = S_DEFINE; //Dictionaries；字典；自定义常量
CPageHead.s_method = S_METHOD; //方法集；内联函数集funA: () => { }
CPageHead.sp_method = SP_METHOD; //方法集；内联函数集funA: () => { }
CPageHead.s_action = S_ACTION; //侦听函数的实现方法；同步侦听函数funA: () => { } 
CPageHead.s_ajax = S_AJAX; //异步函数；远程服务函数 funA: () => { }
CPageHead.s_localStorage = S_LOCALSTORAGE; //funA: () => { }
