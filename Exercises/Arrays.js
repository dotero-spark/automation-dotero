//1) Create 'Fruits' Array, add "banana" and apple", then add "orange" at the end and remove "banana"
//Creating the original array:
var fruits = ["Banana","Apple"];

//Showing the content of the array:
console.log("Original array: ", fruits);

//Adding "Orange" at the end:
fruits.push("Orange");

//Showing the new content of the array:
console.log("Array version 2: ", fruits);

//Removing "Banana":
fruits.splice(0,1);

//Showing the new content of the array:
console.log("Array version 3: ", fruits);

//Separator:
console.log("\n\n");

//2) Sort an array with forEach method
//Creating the array:
var numbers = [0, 1, 2, 3, 4];

//Showing and sorting the array:
console.log("The complete array is: ", numbers);
numbers.forEach(function(element,index,array){
    console.log("In the postition ", index, " the element is: ", element);
});


