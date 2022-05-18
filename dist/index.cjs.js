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

function getDay() {
    return new Date();
}
function getYear() {
    return new Date().getFullYear();
}

function validateIdCard(x) {
    return true;
}

exports.add = add;
exports.getDay = getDay;
exports.getLocation = getLocation;
exports.getYear = getYear;
exports.minus = minus;
exports.validateIdCard = validateIdCard;
