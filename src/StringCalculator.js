// TDD KATA
// GUNNLAUGUR GUÐMUNDSSON
function add(number){
    if(number == "")
    return 0;

    if(number.includes(",")){
        var numberArray = number.split(",");
        var returnedNumber = 0;
        for(var i = 0; i < numberArray.length; i++){
            returnedNumber = returnedNumber + parseInt(numberArray[i]);
        }
        return returnedNumber;
    }
    else
    return parseInt(number);
}


module.exports = add;