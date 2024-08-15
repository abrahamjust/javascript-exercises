const repeatString = function(str, num) {
    returnStr = '';
    if(num < 0) {
        return 'ERROR';
    }
    for(let i = 0; i < num; i++) {
        returnStr += str;
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
