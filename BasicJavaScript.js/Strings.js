// String is sequence of characters used to represent text
//Strings are immutable in JS

let str = "ShankarMobile"

// //TEMPLATES LITERALS
// A WAY TO HAVE EMBEDDED EXPRESSIONS IN STRINGS

// //ESCAPE CHARACTERS
// \N - RETURN IN NEW LINE
// \t - Give a TAB space

console.log("Shankar \nMobile")

//String Methods in JS  

str.toUpperCase();
str.toUpperCase();
str.trim(); //removes whiteSpaces
console.log(str.slice(8,13)); //return part of string
str.concat(str2); //joins str2 with str1
str.replace(serachVal, newVal);
str.charAt(idx);