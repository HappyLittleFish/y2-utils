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

export { add, getDay, getLocation, getYear, minus, validateIdCard };
