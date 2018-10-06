// TDD KATA
// GUNNLAUGUR GUÐMUNDSSON
function add(number){
    if(number == ""){
        return 0;
    }
    var numberArray = number.split(/,|\n/g);
    numberArray = filterOver1000(numberArray);
    filterNegatives(numberArray);
    return sum(numberArray);
}

function sum(numberArray){
    var returnedNumber = 0;
    for(var i = 0; i < numberArray.length; i++){
        returnedNumber = returnedNumber + parseInt(numberArray[i]);
    }
    return returnedNumber;
}
function filterNegatives(numberArray){
    var negativeArray = [];
    for(var i = 0; i < numberArray.length; i++){
        if(parseInt(numberArray[i]) < 0){
            negativeArray.push(numberArray[i]);
        }
    }
    if(negativeArray.length > 0){
        throw new Error("Negatives not allowed: " + negativeArray.join(','));
    }
}
function filterOver1000(numberArray){
    return numberArray.filter(number => number <= 1000);
}

module.exports = add;