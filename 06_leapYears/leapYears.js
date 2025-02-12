const leapYears = function(year) {
    check = year % 100
    check2 = year % 400

    if(year % 4 === 0){
        if(year > 100 && check === 0)
            if(check2 === 0)
                return true
            else return false
        else return true
        
    }
    else return false
};

// Do not edit below this line
module.exports = leapYears;
