const sumAll = function(numberOne, numberTwo) {
    let checkOne = Number.isInteger(numberOne)
    let checkTwo = Number.isInteger(numberTwo)

    let newArray = []
    let sum = 0


    if(numberOne < 0 || numberTwo < 0){
        return "ERROR"
    }
    else if(checkOne === false || checkTwo === false){
        return "ERROR"
    }
    else if(numberOne < numberTwo){
        for(i = numberOne; i <= numberTwo; i++){
            newArray.push(i)
        }
        for(i = 0; i < newArray.length; i++){
            sum += newArray[i]
        }
    }
    else if(numberOne > numberTwo){
        for(i = numberTwo; i <= numberOne; i++){
            newArray.push(i)
        }
        for(i = 0; i < newArray.length; i++){
            sum += newArray[i]
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
