// TDD KATA
// GUNNLAUGUR GUÐMUNDSSON
function add(number){
    if(number == ""){
        return 0;
    }
    var numberArray = number.split(/,|\n/g);
    if(number.includes(",")){
        return sum(numberArray);
    }
    else
    return parseInt(number);
}

function sum(numberArray){
    var returnedNumber = 0;
    for(var i = 0; i < numberArray.length; i++){
        returnedNumber = returnedNumber + parseInt(numberArray[i]);
    }
    return returnedNumber;
}


module.exports = add;