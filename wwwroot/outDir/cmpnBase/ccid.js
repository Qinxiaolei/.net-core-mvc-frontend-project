export const CCID_DEFAULT = {
    cUDID: '',
    nChildCount: 0,
    cContainerID: ''
};
/**
 * 类标识  class identifier
 */
export class CCID {
    constructor(oDefault = null) {
        if (!oDefault) {
            oDefault = CCID_DEFAULT;
        }
        this.cUDID = oDefault.cUDID;
        this.nChildCount = oDefault.nChildCount;
        this.cContainerID = oDefault.cContainerID;
    }
    static getDefault() { return CCID_DEFAULT; } //默认值
    static getChildUDID(oThisInterface) {
        oThisInterface.nChildCount++;
        let s = oThisInterface.cUDID + '_' + oThisInterface.nChildCount;
        return s;
    }
}
