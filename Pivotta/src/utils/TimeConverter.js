import moment from "moment-timezone";
const getTimeAgo = (time) => {
    const currentTime = moment().tz('Asia/Tokyo').format("YYYY/MM/DD HH:mm:ss")
    const createdTime = moment(time).format('YYYY/MM/DD HH:mm:ss')
    const seconds = moment(currentTime).diff(moment(createdTime), 'seconds');
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) {
        return {
            type: 'time_ago',
            times: "最近"
        }
    } else if (minutes < 60) {
        return {
            type: 'time_ago',
            times: minutes + "分前"
        }
    } else if (hours <= 24) {
        return {
            type: 'time_ago',
            times: hours + "時間前"
        }
    } else {
        const years = moment(currentTime).diff(moment(createdTime), 'years');
        if (years > 0) {
            return {
                type: 'date_time',
                times: moment(createdTime).format("HH:mm"),
                dates: moment(createdTime).format("YYYY/MM/DD")
            }
        }
        return {
            type: 'date_time',
            times: moment(createdTime).format("HH:mm"),
            dates: moment(createdTime).format("MM/DD")
        }
    }
}

export default {
    getTimeAgo
}