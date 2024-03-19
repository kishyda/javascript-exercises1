const sumAll = function(lowerbound, upperbound) {
    let sum = 0;
    for(let i = lowerbound; i <= upperbound; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
