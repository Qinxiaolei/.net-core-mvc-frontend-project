import * as ext from '../../export';
import { S_DEFINE } from './S_DEFINE';
export const DEFAULT = {
    CID: {
        cUDID: '',
        nChildCount: 0,
        cContainerID: S_DEFINE.elementIdDict.cContainerId
    },
    Prmt: {
        cUserFullName: '',
        cSearchStr: '', //搜索框填写值
    },
    RunningState: {
        cTime: `${new ext.CDate().getDateString('mm-dd HH:mm:ss w')}`,
        isLogged: false,
        isSearchIptShow: true, //搜索框是否显示
    }
};
