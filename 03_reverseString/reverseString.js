const reverseString = function(str) {
    reverseStr = '';
    for(let i = str.length-1; i >= 0; i--) {
        let c = str.charAt(i);
        reverseStr += c;
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
