const palindromes = function (word) {
    let firsthalf = word.slice(0, (word.length) / 2)
    let secondhalf = word.slice(Math.ceil(word.length / 2)).split("").reverse().join("");
    if (firsthalf === secondhalf) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
