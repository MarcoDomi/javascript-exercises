const repeatString = function (string, num) {
    s = ''
    for (let i = 1; i <= num; i++){
        s += string;
    }

    if (num < 0)
        s = 'ERROR';

    return s;
};

// Do not edit below this line
module.exports = repeatString;
