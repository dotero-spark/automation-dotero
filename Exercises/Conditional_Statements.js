//1) Decide which number is greater than the other
function conditionalStatements(number_1, number_2){
    if(number_1 > number_2){
        console.log(number_1, " is greater than ", number_2, ".");
    }
    else if(number_1 < number_2){
        console.log(number_2, " is greater than ", number_1, ".");
    }
    else{
        console.log("Both numbers are the same.");
    }
}

//Example 1):
var number_1 = 3;
var number_2 = 2;
conditionalStatements(number_1, number_2);