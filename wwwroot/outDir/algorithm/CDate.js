/**
 * 时间日期类
 * 各种常用的构造和输出
 */
export class CDate {
    constructor($time = (new Date()).getTime()) {
        this.time = $time;
        let oDate = new Date($time);
        this.year = oDate.getFullYear();
        this.month = oDate.getMonth() + 1;
        this.date = oDate.getDate();
        this.day = oDate.getDay();
        this.hour = oDate.getHours();
        this.minute = oDate.getMinutes();
        this.second = oDate.getSeconds();
        this.millisecond = oDate.getMilliseconds();
        this.ampm = this.hour > 11 ? 'PM' : 'AM';
        this.ampmCN = this.hour > 11 ? '下午' : '上午';
        this.sHour = (this.hour - this.hour > 11 ? 12 : 0).toString();
    }
    /**
     * 生成不同格式的时间日期字串
     * @param sStyle 时间日期字串的格式
     */
    getDateString(sStyle = 'yyyy-mm-dd HH:mm:ss.sss') {
        let cYear = this.year.toString(); //显示全年分
        let cYear2 = this.year.toString().slice(-2); //只显示年份后两位
        let cMonth = `0${this.month}`.slice(-2);
        let cDate = `0${this.date}`.slice(-2);
        let cSHour = `0${this.sHour}`.slice(-2);
        let cHour = `0${this.hour}`.slice(-2);
        let cMinute = `0${this.minute}`.slice(-2);
        let cSecond = `0${this.second}`.slice(-2);
        let cMillisecond = `000${this.millisecond}`.slice(3);
        let arrWeek = ['日', '一', '二', '三', '四', '五', '六'];
        switch (sStyle.trim()) {
            case 'yymmdd':
                return `${cYear2}${cMonth}${cDate}`;
            case 'yyyy-mm-dd':
                return `${cYear}-${cMonth}-${cDate}`;
            case 'mm-dd':
                return `${cMonth}-${cDate}`;
            case 'yyyymmdd':
                return `${cYear}${cMonth}${cDate}`;
            case 'y-m-d H:m:s.sss':
                return `${cYear}-${this.month}-${this.date} ${this.hour}:${this.minute}:${this.second}.${cMillisecond}`;
            case 'yyyy-mm-dd hh:mm:ss.sss':
            case 'yyyy-mm-dd EN hh:mm:ss.sss':
            case 'yyyy-mm-dd en hh:mm:ss.sss':
                return `${cYear}-${cMonth}-${cDate} ${this.ampm} ${cSHour}:${cMinute}:${cSecond}.${cMillisecond}`;
            case 'yyyy-mm-dd CN hh:mm:ss.sss':
            case 'yyyy-mm-dd cn hh:mm:ss.sss':
                return `${cYear}-${cMonth}-${cDate} ${this.ampmCN} ${cSHour}:${cMinute}:${cSecond}.${cMillisecond}`;
            case 'y-m-d h:m:s.sss':
                return `${cYear}-${this.month}-${this.date} ${this.ampm} ${this.sHour}:${this.minute}:${this.second}.${cMillisecond}`;
            case 'yy-mm-dd HH:mm:ss.sss':
                return `${cYear2}-${cMonth}-${cDate} ${cHour}:${cMinute}:${cSecond}.${cMillisecond}`;
            case 'yy-m-d H:m:s.sss':
            case 'y-m-d H:m:s.sss':
                return `${cYear2}-${this.month}-${this.date} ${this.hour}:${this.minute}:${this.second}.${cMillisecond}`;
            case 'y-m-d H:m:s.sss':
                return `${cYear}-${this.month}-${this.date} ${this.hour}:${this.minute}:${this.second}.${cMillisecond}`;
            case 'yyyy-mm-dd hh:mm:ss':
                return `${cYear}-${cMonth}-${cDate} ${this.ampm} ${cSHour}:${cMinute}:${cSecond}`;
            case 'y-m-d h:m:s':
                return `${cYear}-${this.month}-${this.date} ${this.ampm} ${this.sHour}:${this.minute}:${this.second}`;
            case 'yy-mm-dd HH:mm:ss':
                return `${cYear2}-${cMonth}-${cDate} ${cHour}:${cMinute}:${cSecond}`;
            case 'yy-m-d H:m:s':
            case 'y-m-d H:m:s':
                return `${cYear2}-${this.month}-${this.date} ${this.hour}:${this.minute}:${this.second}`;
            case 'yyyy-mm-dd HH:mm':
                return `${cYear}-${cMonth}-${cDate} ${cHour}:${cMinute}`;
            case 'yyyy-mm-dd hh:mm':
                return `${cYear}-${cMonth}-${cDate} ${this.ampm} ${cSHour}:${cMinute}`;
            case 'y-m-d h:m':
                return `${cYear}-${this.month}-${this.date} ${this.ampm} ${this.sHour}:${this.minute}`;
            case 'yy-mm-dd HH:mm':
                return `${cYear2}-${cMonth}-${cDate} ${cHour}:${cMinute}`;
            case 'yy-m-d H:m':
            case 'y-m-d H:m':
                return `${cYear2}-${this.month}-${this.date} ${this.hour}:${this.minute}:${this.second}.${cMillisecond}`;
            case 'yyyy-mm-dd hh:mm':
                return `${cYear}-${cMonth}-${cDate} ${this.ampm} ${cSHour}:${cMinute}:${cSecond}`;
            case 'yy-mm-dd HH:mm':
                return `${cYear2}-${cMonth}-${cDate} ${cHour}:${cMinute}`;
            case 'yy-m-d H:m':
            case 'y-m-d H:m':
                return `${cYear2}-${this.month}-${this.date} ${this.hour}:${this.minute}`;
            case 'yy-m-d h:m:s': // 2019/12/5 9:47:26
                return `${this.year}/${this.month}/${this.date} ${this.hour}:${this.minute}:${this.second}`;
            case 'ddHHyymm': // 日时/年月------0514/1912
                return `${cDate}${cHour}/${cYear2}${cMonth}`;
            case 'HH:mm:ss': // 时:分:秒
                return `${cHour}:${cMinute}:${cSecond}`;
            case 'HH:mm:ss w': // 时:分:秒 周
                return `${cHour}:${cMinute}:${cSecond} ${arrWeek[this.day]}`;
            case 'yyyy-mm-dd w HH:mm:ss':
                return `${cYear}-${cMonth}-${cDate} ${arrWeek[this.day]}${cHour}:${cMinute}:${cSecond}`;
            case 'yyyy-mm-dd HH:mm:ss':
            default:
                return `${cYear}-${cMonth}-${cDate} ${cHour}:${cMinute}:${cSecond}`;
        }
    }
    /**
     * 根据当前时间计算本周的起始时间
     */
    getWeekStartByNow() {
        let nNow = new Date();
        let nNowTime = nNow.getTime();
        let nDay = nNow.getDay();
        let nOneDayLong = 24 * 60 * 60 * 1000; //一天的时间的毫秒数
        let nMondayTime = nNowTime - (nDay - 1) * nOneDayLong; //本周一的时间的毫秒数
        let nMonday = new Date(nMondayTime);
        let nMondayYear = nMonday.getFullYear(); //本周一的年
        let nMondayMonth = nMonday.getMonth() + 1; //本周一的月
        let nMondayDay = nMonday.getDate(); //本周一的日
        let cStart = nMondayYear + '-' + ('0' + nMondayMonth).slice(-2) + '-' + ('0' + nMondayDay).slice(-2);
        return cStart;
    }
}
