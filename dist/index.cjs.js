'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function add(x, y) {
    return x + y;
}
function minus(x, y) {
    return x - y;
}

function getLocation() {
    return 12345;
}

function formatDate(fmt, date) {
    const o = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(), // 毫秒
    };
    // 年份格式
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substring(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            // fmt = fmt.replace(RegExp.$1, o[k])
            // 根据要求补0
            const val = o[k];
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? val : ('00' + val).substring(('' + val).length));
        }
    }
    return fmt;
}

function validateIdCard(value) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(value);
}

exports.add = add;
exports.formatDate = formatDate;
exports.getLocation = getLocation;
exports.minus = minus;
exports.validateIdCard = validateIdCard;
