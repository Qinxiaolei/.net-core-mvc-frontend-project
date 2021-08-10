import * as ext from '../export'; //导入外部组件或函数
import { CClsBase } from '../cmpnBase/ccbase';
import { CLang } from '../language/language';
/**
 * 登录组件
 */
import { S_DEFINE } from './S_DEFINE';
import { DEFAULT } from './DEFAULT';
import { S_METHOD } from './S_METHOD';
import { SP_METHOD } from './SP_METHOD';
import { S_ACTION } from './S_ACTION';
import { S_AJAX } from './S_AJAX';
import { S_LOCALSTORAGE } from './S_LOCALSTORAGE';
import { UIE } from './S_UIE';
//仅更类名“ExampleBase”,,模 板代码，几乎不用更改；----------------------------------------------------begin
class CLogin_Model {
    constructor() {
        this.CID = DEFAULT.CID;
        this.Prmt = DEFAULT.Prmt;
        this.RunningState = DEFAULT.RunningState;
    }
}
export class CLogin extends CClsBase {
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
        //登录按钮点击事件
        gMEMO.on.handleLogin = function () {
            S_ACTION.handleLogin();
        };
        //注册按钮点击事件
        gMEMO.on.handleLogon = function () {
            S_ACTION.handleLogon();
        };
        //登录与注册切换
        gMEMO.on.switchLog = function () {
            S_ACTION.switchLog();
        };
        //点击动态口令连接符
        gMEMO.on.connectAccDymPw = function () {
            S_ACTION.connectAccDymPw();
        };
        //填写集团注册码
        gMEMO.on.syncAccount = function (cValue) {
            S_ACTION.syncAccount(cValue);
        };
        //点击集团注册码备选下拉菜单项
        gMEMO.on.syncAccountByDropdownItem = function (cCompanyCode, cCompanyName) {
            S_ACTION.syncAccountByDropdownItem(cCompanyCode, cCompanyName);
        };
        //填写登录名
        gMEMO.on.syncUser = function (cValue) {
            S_ACTION.syncUser(cValue);
        };
        //点击登录名备选下拉菜单项
        gMEMO.on.syncUserByDropdownItem = function (cUser) {
            S_ACTION.syncUserByDropdownItem(cUser);
        };
        //填写登录密码
        gMEMO.on.syncPassword = function (cValue) {
            S_ACTION.syncPassword(cValue);
        };
        //填写确认原密码
        gMEMO.on.syncConfirmOldPw = function (cValue) {
            S_ACTION.syncConfirmOldPw(cValue);
        };
        //填写新密码
        gMEMO.on.syncNewPassword = function (cValue) {
            S_ACTION.syncNewPassword(cValue);
        };
        //填写确认密码
        gMEMO.on.syncConfirmPw = function (cValue) {
            S_ACTION.syncConfirmPw(cValue);
        };
        //切换记住密码的选中与非选中
        gMEMO.on.toggleRememberPwCheckbox = function (isChecked) {
            S_ACTION.toggleRememberPwCheckbox(isChecked);
        };
        //登录与修改密码切换
        gMEMO.on.toggleChangePw = function () {
            S_ACTION.toggleChangePw();
        };
        //填写管理员密码
        gMEMO.on.syncAccountPw = function (cValue) {
            S_ACTION.syncAccountPw(cValue);
        };
        //填写动态口令
        gMEMO.on.syncAccDynamicPw = function (cValue) {
            S_ACTION.syncAccDynamicPw(cValue);
        };
        //清除全部待注册用户信息
        gMEMO.on.clearLogonUser = function () {
            S_ACTION.clearLogonUser();
        };
        //填写待注册用户的登录名
        gMEMO.on.syncLogonUser = function (nIndex, cValue) {
            S_ACTION.syncLogonUser(nIndex, cValue);
        };
        //填写待注册用户的的默认密码
        gMEMO.on.syncLogonPw = function (nIndex, cValue) {
            S_ACTION.syncLogonPw(nIndex, cValue);
        };
        //填写待注册用户的的真实姓名
        gMEMO.on.syncLogonFullName = function (nIndex, cValue) {
            S_ACTION.syncLogonFullName(nIndex, cValue);
        };
        //填写待注册用户的的手机号码
        gMEMO.on.syncLogonPhone = function (nIndex, cValue) {
            S_ACTION.syncLogonPhone(nIndex, cValue);
        };
        //填写待注册用户的的常用邮箱
        gMEMO.on.syncLogonEmail = function (nIndex, cValue) {
            S_ACTION.syncLogonEmail(nIndex, cValue);
        };
        //填写待注册用户的的工号
        gMEMO.on.syncLogonJobCode = function (nIndex, cValue) {
            S_ACTION.syncLogonJobCode(nIndex, cValue);
        };
        //填写待注册用户的的部门名称
        gMEMO.on.syncLogonDepartment = function (nIndex, cValue) {
            S_ACTION.syncLogonDepartment(nIndex, cValue);
        };
        //填写待注册用户的的用户主管
        gMEMO.on.syncLogonSupervisor = function (nIndex, cValue) {
            S_ACTION.syncLogonSupervisor(nIndex, cValue);
        };
        //填写待注册用户的的用户状态
        gMEMO.on.syncLogonState = function (nIndex, cStatus) {
            S_ACTION.syncLogonState(nIndex, cStatus);
        };
        //增加一个待注册用户信息
        gMEMO.on.addLogonUser = function () {
            S_ACTION.addLogonUser();
        };
        //刷新集团注册码备选下拉菜单
        gMEMO.on.renewAccDropdownMenu = function () {
            S_METHOD.renewAccDropdownMenu();
        };
        //刷新用户名备选下拉菜单
        gMEMO.on.renewUserDropdownMenu = function () {
            S_METHOD.renewUserDropdownMenu();
        };
        //获取硬件信息
        this.Prmt.oHardware = S_METHOD.getHardwareInfo();
    }
    renewUI() {
        let oThis = this;
        let eContainer = document.getElementById(oThis.CID.cContainerID);
        if (eContainer) {
            eContainer.innerHTML = oThis.getHtml();
            setTimeout(() => oThis.on(), 200);
        }
    }
    //刷新登录页UI
    renewLoginUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cLoginContainerId);
        if (eContainer)
            eContainer.innerHTML = oThis.getLoginHtml();
    }
    //刷新集团注册码文本框UI
    renewLoginAccountUI() {
        let oThis = this;
        let cAccount = oThis.Prmt.cAccount;
        let nCompanyID = oThis.Prmt.nCompanyID;
        let ipt = document.getElementById(S_DEFINE.elementIdDict.cIptAccountId);
        if (ipt) {
            //点击动态口令连结符按钮后显示动态口令连接符
            //否则根据是否已登录判断是否显示集团注册码
            let isAccDymPwConn = nCompanyID.includes(S_DEFINE.cAccDymPwConn); //是否显示动态口令连接符
            ipt.value = isAccDymPwConn ? nCompanyID : cAccount.length > 0 ? '' : nCompanyID;
            ipt.placeholder = cAccount.length > 0 ? cAccount : UIE.集团注册码;
        }
    }
    //刷新登录用户名文本框UI
    renewLoginUserUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cLoginUserCId);
        if (eContainer)
            eContainer.innerHTML = oThis.getLoginUserHtml();
    }
    //刷新登录密码文本框UI
    renewLoginPasswordUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cLoginPasswordCId);
        if (eContainer)
            eContainer.innerHTML = oThis.getLoginPasswordHtml();
    }
    //刷新登录按钮UI
    renewLoginBtnUI() {
        let oThis = this;
        let eBtn = document.getElementById(S_DEFINE.elementIdDict.cLoginBtnContainerId);
        if (eBtn)
            eBtn.innerHTML = oThis.getLoginBtnHtml();
    }
    //刷新修改密码页UI
    renewChangePwUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cChangePwContainerId);
        if (eContainer)
            eContainer.innerHTML = oThis.getChangePwHtml();
    }
    //刷新重新输入原密码文本框UI
    renewIptConfirmOldPwUI() {
        let oThis = this;
        let cPwEnc = oThis.Prmt.cPwEnc; //原密码填写值
        let cConfirmOldPw = oThis.RunningState.cConfirmOldPw; //重新输入原密码填写值
        let cConfirmOldPwEnc = new ext.CEncryption().encrypt(cConfirmOldPw);
        let isValid = cConfirmOldPwEnc === cPwEnc; //是否一致
        let ipt = document.getElementById(S_DEFINE.elementIdDict.cIptConfirmOldPwId);
        if (ipt) {
            if (!isValid) {
                ipt.classList.add('is-invalid');
            }
            else {
                ipt.classList.remove('is-invalid');
            }
            ipt.value = cConfirmOldPw;
        }
    }
    //刷新确认新密码文本框UI
    renewConfirmPwUI() {
        let oThis = this;
        let cNewPassword = oThis.RunningState.cNewPassword; //新密码填写值
        let cConfirmPw = oThis.RunningState.cConfirmPw; //确认密码填写值
        let cNewPasswordEnc = new ext.CEncryption().encrypt(cNewPassword);
        ;
        let cConfirmPwEnc = new ext.CEncryption().encrypt(cConfirmPw);
        ;
        let isValid = cConfirmPwEnc === cNewPasswordEnc; //是否一致
        let ipt = document.getElementById(S_DEFINE.elementIdDict.cIptConfirmPwId);
        if (ipt) {
            if (!isValid) {
                ipt.classList.add('is-invalid');
            }
            else {
                ipt.classList.remove('is-invalid');
            }
            ipt.value = cConfirmPw;
        }
    }
    //刷新注册页UI
    renewLogonUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cLogonContainerId);
        if (eContainer)
            eContainer.innerHTML = oThis.getLogonHtml();
    }
    //刷新注册页内待注册用户信息区UI
    renewLogonUserUI() {
        let oThis = this;
        let eContainer = document.getElementById(S_DEFINE.elementIdDict.cLogonUserContainerId);
        if (eContainer)
            eContainer.innerHTML = oThis.getLogonUserHtml();
    }
    //刷新注册按钮UI
    renewLogonBtnUI() {
        let oThis = this;
        let eBtn = document.getElementById(S_DEFINE.elementIdDict.cLogonBtnContainerId);
        if (eBtn)
            eBtn.innerHTML = oThis.getLogonBtnHtml();
    }
    ini(nSelect) { } //可以根据本地储存/预设值/默认值来更改状态实现初始化
    //登录页html
    getLoginHtml() {
        let oThis = this;
        let eleIdDict = S_DEFINE.elementIdDict;
        let cHtml = `
        <div id="${eleIdDict.cLoginContainerId}">
            <div class="input-group mb-3 py-2 pt-sm-4" id="${eleIdDict.cLoginAccountCId}">
                ${oThis.getLoginAccountHtml()}
            </div>
            <div class="input-group mb-3 py-2" id="${eleIdDict.cLoginUserCId}">
                ${oThis.getLoginUserHtml()}
            </div>
            <div class="input-group mb-3 py-2" id="${eleIdDict.cLoginPasswordCId}">
                ${oThis.getLoginPasswordHtml()}
            </div>
            <div id="${eleIdDict.cChangePwContainerId}">
                ${oThis.getChangePwHtml()}
            </div>
            <div class="d-flex justify-content-between align-items-center pb-3 pb-md-4">
                <div class="form-check">
                    <input 
                        onchange="gMEMO.on.toggleRememberPwCheckbox(this.checked);"
                        type="checkbox" 
                        class="form-check-input" 
                        id="${eleIdDict.cRememberPwCheckboxId}"
                        ${oThis.Prmt.isKeepPw ? 'checked' : ''}
                    />
                    <label class="form-check-label" for="${eleIdDict.cRememberPwCheckboxId}">
                        <small>${UIE.记住密码}</small>
                    </label>
                </div>
                <button
                    onclick="gMEMO.on.toggleChangePw();"
                    type="button"
                    class="btn btn-link px-0"
                >
                    <small>${oThis.RunningState.isChangePw ? UIE.返回登录 : UIE.修改密码}</small>
                </button>
            </div>
            <div class="mb-5" id="${eleIdDict.cLoginBtnContainerId}">
                ${oThis.getLoginBtnHtml()}
            </div>
        </div>`;
        return cHtml;
    }
    //集团注册码文本框html
    getLoginAccountHtml() {
        let eleIdDict = S_DEFINE.elementIdDict;
        let cStyle = 'style="min-height:6.7rem;max-height:11rem;overflow-y:auto;"';
        let oThis = this;
        let cAccount = oThis.Prmt.cAccount;
        let nCompanyID = oThis.Prmt.nCompanyID;
        let cHtml = `
        <div class="dropup flex-fill">
            <input
                oninput="gMEMO.on.syncAccount(this.value);"
                onfocus="gMEMO.on.renewAccDropdownMenu();"
                type="text"
                class="form-control py-3 rounded-0"
                autocomplete="off"
                auto-complete="off"
                id="${eleIdDict.cIptAccountId}"
                value="${cAccount.length > 0 ? '' : nCompanyID}"
                placeholder="${cAccount.length > 0 ? cAccount : CLang.getPureText(UIE.集团注册码)}"
            />
            <ul class="dropdown-menu w-100 mt-0 rounded-0 border-bottom-0" id="${eleIdDict.cAccDrpdwnMenuId}" ${cStyle}></ul>
        </div>
        <div class="input-group-text">
            <span onclick="gMEMO.on.connectAccDymPw();" class="hover-pointer">∷</span>
        </div>`;
        return cHtml;
    }
    //登录用户名文本框html
    getLoginUserHtml() {
        let eleIdDict = S_DEFINE.elementIdDict;
        let cStyle = 'style="min-height:6.7rem;max-height:11rem;overflow-y:auto;"';
        let oThis = this;
        let cHtml = `
        <div class="dropup flex-fill">
            <input
                oninput="gMEMO.on.syncUser(this.value);"
                onfocus="gMEMO.on.renewUserDropdownMenu();"
                type="text"
                class="form-control py-3 rounded-0"
                autocomplete="off"
                auto-complete="off"
                id="${S_DEFINE.elementIdDict.cIptUserId}"
                value="${oThis.Prmt.cUser}" 
                placeholder="${CLang.getPureText(UIE.登录名)}"
            />
            <ul class="dropdown-menu w-100 mt-0 rounded-0 border-bottom-0" id="${eleIdDict.cUserDrpdwnMenuId}" ${cStyle}></ul>
        </div>`;
        return cHtml;
    }
    //登录密码文本框html
    getLoginPasswordHtml() {
        let oThis = this;
        let cHtml = `
        <input
            oninput="gMEMO.on.syncPassword(this.value);"
            type="password"
            class="form-control py-3 rounded-0"
            autocomplete="off"
            auto-complete="new-password"
            id="${S_DEFINE.elementIdDict.cIptPasswordId}"
            value="${oThis.Prmt.cPwEnc}" 
            placeholder="${oThis.RunningState.isChangePw ? CLang.getPureText(UIE.原密码) : CLang.getPureText(UIE.密码_验证码)}"
        />`;
        return cHtml;
    }
    //重新输入原密码文本框html
    getIptConfirmOldPwHtml() {
        let eleIdDict = S_DEFINE.elementIdDict;
        let oThis = this;
        let cPwEnc = oThis.Prmt.cPwEnc; //原密码填写值
        let cConfOldPw = oThis.RunningState.cConfirmOldPw; //重新输入原密码填写值
        let cConfOldPwEnc = new ext.CEncryption().encrypt(cConfOldPw);
        let isValid = cConfOldPwEnc === cPwEnc; //是否一致
        let cHtml = `
        <input
            oninput="gMEMO.on.syncConfirmOldPw(this.value);"
            type="password"
            class="form-control py-3 rounded-0 ${isValid ? '' : 'is-invalid'}"
            autocomplete="off"
            auto-complete="new-password"
            id="${eleIdDict.cIptConfirmOldPwId}"
            value="${cConfOldPw}" 
            placeholder="${CLang.getPureText(UIE.重新输入原密码)}"
        />`;
        return cHtml;
    }
    //确认新密码文本框html
    getIptConfirmPwHtml() {
        let eleIdDict = S_DEFINE.elementIdDict;
        let oThis = this;
        let cNewPassword = oThis.RunningState.cNewPassword;
        let cConfPw = oThis.RunningState.cConfirmPw;
        let cNewPwEnc = new ext.CEncryption().encrypt(cNewPassword);
        let cConfPwEnc = new ext.CEncryption().encrypt(cConfPw);
        let isValid = cConfPwEnc === cNewPwEnc; //是否一致
        let cHtml = `
        <input
            oninput="gMEMO.on.syncConfirmPw(this.value);"
            type="password"
            autocomplete="off"
            auto-complete="new-password"
            class="form-control py-3 rounded-0 ${isValid ? '' : 'is-invalid'}"
            id="${eleIdDict.cIptConfirmPwId}"
            value="${cConfPw}"
            placeholder="${CLang.getPureText(UIE.确认密码)}"
        />`;
        return cHtml;
    }
    //修改密码页html
    getChangePwHtml() {
        let eleIdDict = S_DEFINE.elementIdDict;
        let oThis = this;
        let cHtml = ``;
        if (oThis.RunningState.isChangePw) {
            cHtml = `
            <div class="collapse show">
                <div class="input-group mb-3 py-2" id="${eleIdDict.cIptConfirmOldPwCId}">
                    ${oThis.getIptConfirmOldPwHtml()}
                </div>
                <div class="input-group mb-3 py-2">
                    <input
                        oninput="gMEMO.on.syncNewPassword(this.value);"
                        type="password"
                        class="form-control py-3 rounded-0"
                        autocomplete="off"
                        auto-complete="new-password"
                        id="${eleIdDict.cIptNewPwId}"
                        value="${oThis.RunningState.cNewPassword}"
                        placeholder="${CLang.getPureText(UIE.新密码)}"
                    />
                </div>
                <div class="input-group mb-3 py-2" id="${eleIdDict.cIptConfirmPwCId}">
                    ${oThis.getIptConfirmPwHtml()}
                </div>
            </div>`;
        }
        return cHtml;
    }
    //登录按钮html
    getLoginBtnHtml() {
        let oThis = this;
        let isLogging = oThis.RunningState.ajax.isLogging; //是否正在ajax登录
        let isChangePw = oThis.RunningState.isChangePw; //修改密码折叠是否打开
        let cHtml = `
        <div class="d-grid gap-2">
            <button 
                onclick="gMEMO.on.handleLogin();"
                type="button"
                class="btn btn-primary py-3"
                id="${S_DEFINE.elementIdDict.cBtnLoginId}"
                ${isLogging ? 'disabled' : ''}
            >
                ${isLogging ? '<i class="fas fa-sync fa-spin"></i>' : isChangePw ? UIE.修改密码 : UIE.登录}
            </button>
        </div>`;
        return cHtml;
    }
    //注册页html
    getLogonHtml() {
        let eleIdDict = S_DEFINE.elementIdDict;
        let oThis = this;
        let cHtml = `
        <div id="${eleIdDict.cLogonContainerId}">
            <div class="input-group mb-3 py-2">
                <input
                    type="text"
                    class="form-control py-3 rounded-0 bg-white"
                    value="${oThis.Prmt.cAccount}" 
                    placeholder="${CLang.getPureText(UIE.集团注册码)}"
                    id="${eleIdDict.cIptAccountId}"
                    autocomplete="off"
                    auto-complete="off"
                    disabled
                />
            </div>
            <div class="input-group mb-3 py-2">
                <input
                    oninput="gMEMO.on.syncAccountPw(this.value);"
                    type="password"
                    class="form-control py-3 rounded-0"
                    value="${oThis.Prmt.cAccPwEnc}"
                    placeholder="${CLang.getPureText(UIE.管理员密码)}"
                    id="${eleIdDict.cIptAccountPwId}"
                    autocomplete="off"
                    auto-complete="new-password"
                />
            </div>
            <div class="input-group mb-3 py-2">
                <span class="input-group-text" style="cursor:pointer;">∷</span>
                <input
                    oninput="gMEMO.on.syncAccDynamicPw(this.value);"
                    type="password"
                    class="form-control py-3 rounded-0"
                    value="${oThis.Prmt.cAccDynamicPw}"
                    placeholder="${CLang.getPureText(UIE.设置动态口令)}"
                    autocomplete="off"
                    auto-complete="new-password"
                />
            </div>
            <div class="pb-4">
                <div class="table-responsive text-nowrap">
                    <table class="table table-borderless table-sm mb-0">
                        <thead>
                            <tr>
                                <th
                                    onclick="gMEMO.on.clearLogonUser();"
                                    class="py-2"
                                    title="${CLang.getPureTextAndIndex(UIE.清空)}"
                                    style="width:2rem;cursor:pointer;"
                                >${UIE.No}</th>
                                <th>${UIE.登录名}</th>
                                <th>${UIE.默认密码}</th>
                                <th>${UIE.用户姓名}</th>
                                <th>${UIE.手机号码}</th>
                                <th>${UIE.常用邮箱}</th>
                                <th>${UIE.用户工号}</th>
                                <th>${UIE.部门名称}</th>
                                <th>${UIE.用户主管}</th>
                                <th>${UIE.用户状态}</th>
                            </tr>
                        </thead>
                        <tbody id="${eleIdDict.cLogonUserContainerId}">
                            ${oThis.getLogonUserHtml()}
                        </tbody>
                    </table>
                </div>
                <div class="text-end">
                    <button onclick="gMEMO.on.addLogonUser();" type="button" class="btn btn-link mt-1 px-0">
                        <i class="fas fa-plus"></i>
                        <i class="fas fa-user-tie"></i>
                    </button>
                </div>
            </div>
            <div class="mb-5" id="${eleIdDict.cLogonBtnContainerId}">
                ${oThis.getLogonBtnHtml()}
            </div>
        </div>`;
        return cHtml;
    }
    //待注册用户信息页html
    getLogonUserHtml() {
        let oThis = this;
        let cHtml = ``;
        for (let i = 0; i < oThis.RunningState.arrLogonUser.length; i++) {
            const logonUser = oThis.RunningState.arrLogonUser[i];
            cHtml += `
            <tr>
                <th class="align-middle py-2" style="min-width:2rem;">${i + 1}</th>
                <td class="align-middle" style="min-width:5rem;">
                    <input 
                        oninput="gMEMO.on.syncLogonUser(${i},this.value);"
                        type="text" 
                        class="form-control" 
                        value="${logonUser.cUser}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:5rem;">
                    <input 
                        oninput="gMEMO.on.syncLogonPw(${i},this.value);"
                        type="text" 
                        class="form-control" 
                        value="${new ext.CEncryption().decrypt(logonUser.cPwEnc)}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:5rem;">
                    <input 
                        oninput="gMEMO.on.syncLogonFullName(${i},this.value);"
                        type="text" 
                        class="form-control" 
                        value="${logonUser.cUserFullName}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:13rem;">
                    <input
                        oninput="gMEMO.on.syncLogonPhone(${i},this.value);"
                        type="text" 
                        class="form-control" 
                        value="${logonUser.cPhone}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:13rem;">
                    <input 
                        oninput="gMEMO.on.syncLogonEmail(${i},this.value);"
                        type="email" 
                        class="form-control" 
                        value="${logonUser.cEmail}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:6rem;">
                    <input 
                        oninput="gMEMO.on.syncLogonJobCode(${i},this.value);"
                        type="text" 
                        class="form-control" 
                        value="${logonUser.cUserJobCode}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:6rem;">
                    <input 
                        oninput="gMEMO.on.syncLogonDepartment(${i},this.value);"
                        type="text" 
                        class="form-control" 
                        value="${logonUser.cDepartment}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:6rem;">
                    <input 
                        oninput="gMEMO.on.syncLogonSupervisor(${i},this.value);"
                        type="text" 
                        class="form-control" 
                        value="${logonUser.cSupervisor}"
                    />
                </td>
                <td class="align-middle py-2" style="min-width:11rem;">
                    <div class="form-check form-check-inline">
                        <input 
                            onchange="gMEMO.on.syncLogonState(${i},this.value);"
                            type="radio" 
                            class="form-check-input" 
                            name="userState-${i + 1}" 
                            id="userStateEnable-${i + 1}" 
                            value="${ext.G_DEFINE.newUserStatusDict.enable}"
                            ${logonUser.cStatus === ext.G_DEFINE.newUserStatusDict.enable ? 'checked' : ''}
                        />
                        <label class="form-check-label" for="userStateEnable-${i + 1}">${UIE.启用}</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input 
                            onchange="gMEMO.on.syncLogonState(${i},this.value);"
                            type="radio"
                            class="form-check-input"
                            name="userState-${i + 1}"
                            id="userStateDisable-${i + 1}"
                            value="${ext.G_DEFINE.newUserStatusDict.disable}"
                            ${logonUser.cStatus === ext.G_DEFINE.newUserStatusDict.disable ? 'checked' : ''}
                        />
                        <label class="form-check-label" for="userStateDisable-${i + 1}"> ${UIE.禁用}</label>
                    </div >
                </td>
            </tr>`;
        }
        return cHtml;
    }
    //注册按钮html
    getLogonBtnHtml() {
        let oThis = this;
        let cColor = '';
        let cInnerHtml = '';
        let cDisabled = '';
        switch (oThis.RunningState.logonBtnStatus) {
            case S_DEFINE.logonBtnStateDict.none: //无操作，蓝色，显示'注册'字样
            default:
                cColor = 'btn-primary';
                cInnerHtml = UIE.注册;
                cDisabled = '';
                break;
            case S_DEFINE.logonBtnStateDict.in: //正在注册，蓝色，显示旋转图标
                cColor = 'btn-primary';
                cInnerHtml = '<i class="fas fa-sync fa-spin"></i>';
                cDisabled = 'disabled';
                break;
            case S_DEFINE.logonBtnStateDict.success: //注册成功，绿色，显示'注册'字样
                cColor = 'btn-success';
                cInnerHtml = UIE.注册;
                cDisabled = '';
                break;
            case S_DEFINE.logonBtnStateDict.failure: //注册失败，黄色，显示'注册'字样
                cColor = 'btn-warning';
                cInnerHtml = UIE.注册;
                cDisabled = '';
                break;
        }
        let cHtml = `
        <div class="d-grid gap-2">
            <button 
                onclick="gMEMO.on.handleLogon();"
                type="button"
                class="btn ${cColor} py-3" 
                ${cDisabled}
            >
                ${cInnerHtml}
            </button>
        </div>`;
        return cHtml;
    }
    getHtml() {
        let oThis = this;
        let isLogin = oThis.RunningState.isLogin;
        let cHtml = `
        <div class="modal-header border-0">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="${S_DEFINE.elementIdDict.cBtnCloseLoginModalId}"></button>
        </div>
        <div class="modal-body">
            <div class="px-2 px-sm-4">
                <div class="d-flex justify-content-between align-items-center">
                    <img src="../Image/Elicolor_Logo.svg" alt="logo" />
                    <button onclick="gMEMO.on.switchLog();" type="button" class="btn btn-link px-0">
                        <i class="fas ${isLogin ? 'fa-user-tie' : 'fa-user-plus'} fa-fw"></i>
                        ${isLogin ? UIE.注册 : UIE.登录}
                    </button>
                </div>
                <div class="mt-4">
                    ${isLogin ? oThis.getLoginHtml() : oThis.getLogonHtml()}
                </div>
            </div>
        </div>`;
        return cHtml;
    }
}
CLogin.s_define = S_DEFINE; //Dictionaries；字典；自定义常量
CLogin.s_method = S_METHOD; //方法集；内联函数集funA: () => { }
CLogin.sp_method = SP_METHOD; //方法集；内联函数集funA: () => { }
CLogin.s_action = S_ACTION; //侦听函数的实现方法；同步侦听函数funA: () => { } 
CLogin.s_ajax = S_AJAX; //异步函数；远程服务函数 funA: () => { }
CLogin.s_localStorage = S_LOCALSTORAGE; //funA: () => { }
