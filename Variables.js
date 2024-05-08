
Name ="Abhishek";
console.log(Name);
age = 21; 
console.log(age);
study="B.Sc";
console.log(study);
isFollow = false; //Boolean value
totalPrice= 999;
console.log(totalPrice);

/* Variable Name type 
  Camel case - fullName
  snake case - full_name
  kabab case - full-name
  pascal case - FullName */

//var= Variable can re-declare and updated. A global scope variable.
//We can re-declare variable using var keyword

var age =21;
var age =23;
var age =30;
console.log(age);
//But this is a proper way to declare the variable it will be confusing when we right lenghthy code

//let= Variable cannot be re-declare but can be updated. A block scope variable.
//Whenever we declare variavable use let because it will easy to understand
let fulname="tony stark";
let age =21;
let totalPrice=1000;
console.log(fulname);
//const= Variable cannot be re-declare or update. A block scope variable. 
//We can use const if we don't want to change and delete the variable value. Just like maths functions.

//We can also declare empty variable in JS. There value will be remain undefined.But it will not work for the const variable.

//{} this curly braces is called blocked scope. Beacuse whatever you will define in this block you can use only in this not outside the block.
