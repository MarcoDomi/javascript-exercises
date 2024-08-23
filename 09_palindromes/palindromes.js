const palindromes = function (str) {
    let cleanList = str.toLowerCase().split('').filter(ch => (ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57) ||
                                                             (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) ||
                                                             (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122));
    let new_str = cleanList.join('');
    let reverseStr = cleanList.reverse().join('');

    return new_str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
