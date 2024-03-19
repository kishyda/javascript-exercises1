const reverseString = function(string) {
    let reversedString = [];
    let stringlength = string.length;
    for(i = 0;i < stringlength; ++i){
        reversedString[i] = string[stringlength-i];
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
