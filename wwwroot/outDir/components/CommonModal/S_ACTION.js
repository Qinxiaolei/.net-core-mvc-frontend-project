import { S_DEFINE } from './S_DEFINE';
export const S_ACTION = {
    closeModal: function () {
        let eBtn = document.getElementById(S_DEFINE.elementIdDict.cBtnCloseId);
        if (eBtn)
            eBtn.click();
    },
    openModal: function () {
        let eBtn = document.getElementById(S_DEFINE.elementIdDict.cBtnOpenId);
        if (eBtn)
            eBtn.click();
    },
    fnExample: function () { }
};
