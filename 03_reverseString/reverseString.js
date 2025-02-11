const reverseString = function(word) {
    const myArray = word.split(" ")

    for(i = 0; i < myArray.length; i++){
        let newWord = "";
        newWord = myArray[i]
        let splitArray = newWord.split('')
        splitArray.reverse();
        let joinArray = splitArray.join('')
        myArray[i] = joinArray                
    }

    myArray.reverse()
    finishedArray = myArray.join(" ")

    return finishedArray

};

// Do not edit below this line
module.exports = reverseString;


//solution 
//return string.split("").reverse().join("");