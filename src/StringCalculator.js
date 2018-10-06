// TDD KATA
// GUNNLAUGUR GUÐMUNDSSON
function add(number){
    if(number == ""){
        return 0;
    }
    var numberArray = number.split(/,|\n/g);
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

module.exports = add;