const removeFromArray = function (arr) {

    for (let arg = 1; arg < arguments.length; arg++) {
        let index = 0;
        while (index < arr.length) {
            while (arr[index] === arguments[arg]) {
                arr.splice(index, 1);
            }
            index++;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
