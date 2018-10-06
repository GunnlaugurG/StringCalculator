// TDD KATA
// GUNNLAUGUR GUÐMUNDSSON
function add(number){
    if(number == ""){
        return 0;
    }
    var numberArray = splitstring(number);
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

function splitstring(numberArray){
    if(numberArray[0] == "/" && numberArray[1] == "/"){
        var firstNewLine = numberArray.indexOf('\n');
        var extraDelimeter = numberArray.substring(2, firstNewLine);
        var newString = numberArray.substring(firstNewLine);
        return newString.split(extraDelimeter);
    }
    return numberArray.split(/,|\n/g)
}


module.exports = add;