const leapYears = function(year) {
    if(year % 4 === 0){
        if((year % 100) && (year % 400)){
            return true;
        }else {return false;}
    }else{return false;}
}

// Do not edit below this line
module.exports = leapYears;
