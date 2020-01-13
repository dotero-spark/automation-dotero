function conditionalStatements(number_1, number_2){
    if(number_1 > number_2){
        document.writeln(number_1, " is greater than ", number_2, ".");
    }
    else if(number_1 < number_2){
        document.writeln(number_2, " is greater than ", number_1, ".");
    }
    else{
        document.writeln("Both numbers are the same.");
    }
}