/* Types Operators  :-
1- Addition = '+'
2- Substraction = '-'
3- Multiplication = '*'
4- Division = '/' */

let a =5;
let b=2;
console.log(a+b);
console.log("a+b =",a+b);
console.log("a+b =",a-b);
console.log("a * b =", a * b);
console.log("a / b =", a/b);

// Other Operators:-
// 1- Modulus - %
// 2- Exponentiation - **

// Unary Operator:-
// 1- Increment - a++ = a+1
// 2- Decrement - a-- = a-1
// a++ means post Increment
// ++a means pre Increment
// a-- means post Decrement
// --a means pre Decrement


// Assignment operators:
// = - assign the right value to left one
// += - a+=1 = a=a+1
// -= - a-=1 = a=a-1
// *= - a*=1 = a=a*1
// %= - a%=1 = a=a%1
// **= - a**=1 = a=a**1

let x =5;
let y=2;

x +=4; //a=a+4=9
console.log("a =",a);

x -=4; //a=a-4=1
console.log("a =",a)

// Comparision Operators:-

// 1- Equal to - ==
// 2- Equal to and type - ===
// 3- Not equal to - !=
// 4- Not equal to and type - !==
// Other comparision Operators - >, >=, <, <=

let c=5;
let d="5";
console.log("c == d", c==d);


let e=5;
let f="5";
console.log("c === d", e===f);


// Logical Operators:-
// 1- Logical AND = &&
// 2- Logical OR = ||
// 3- Lgical NOT = !

let g = 6;
let h = 5;

let con1 = g > h; //true
let con2 = g ===6; //true
console.log("con1 && con2 = ", con1 && con2);


//Ternary Operators - ex- a ? b:c

//ex - condition ? true output : false output

let age3 = 25;
let result = age3 > 18 ? "adult" : "not adult";
console.log(result);

//another way


let age4 = 25;
age4 > 18 ? console.log("adult" ): console.log("not adult");


