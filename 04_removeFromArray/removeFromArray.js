const removeFromArray = function(arr, ...val) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        //...val is an array, so u can use .includes() to check if the value is there in the parameters or not
        if(!val.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
