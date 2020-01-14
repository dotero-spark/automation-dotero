//1) Create a function that uses a while loop to add numbers from 0 to 5 and return the result of the addition
//Creating the function:
function addition(){
    var i = 0, result = 0;
    while (i <= 5) {
        result = result + i;
        i++;
    }
    console.log("The result of the addition is: ", result);
}

//Calling the function:
addition();

//Separator:
console.log("\n\n");

//2) Compare the elements of two given arrays. If the elements do not match stop the loop and return the index number.
//creating the arrays, the index, and the flag:
var expectedElementsArray = ["Pull requests", "Issues", "Marketplace", "Explore" ];
var currentMenuElements = ["Pull requests", "Issues", "Resources", "Explore" ];
var i = 0;
var flag = true; 

//Creating the loop:
while (flag && i < expectedElementsArray.length) {
    if(expectedElementsArray[i] != currentMenuElements[i]){
        flag = false;
        console.log("The index in which the comparison failed is: ", i);
        console.log("Expected value: ", expectedElementsArray[i]);
        console.log("Current value: ", currentMenuElements[i]);
    }
    i++;
}