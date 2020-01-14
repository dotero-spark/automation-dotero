//1) In a function, loop from 0 to 4 and print "number is even" every time the position is an even number.
//creating the function:
function isEven(){
    for (i= 0; i <= 4; i++){
        if(i % 2 == 0){
            console.log("Position ", i, ": Number is even.");
        }
    }
}

//Calling the function:
isEven();