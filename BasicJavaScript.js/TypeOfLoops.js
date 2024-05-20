// //Types Of Loops
// 1 - FOR LOOP
// 2 - WHILE LOOP
// 3 - DO-WHILE LOOP
// 4 - FOR-OF LOOP
// 5 - FOR-IN LOOP

for (let i=1; i<=5; i++) {
    console.log("apna college")
}

//Calculate sum of 1 to n number

let sum =0;
let n=9;
for(let i=1; i<=n; i++){
    sum = sum +1
}
console.log("sum =", sum);
console.log("Loop has ended");

//WHILE LOOP
let i=1;
while(i<=5){
    console.log("i =",i);
    i++;
}


//DO-WHILE
let j=1;
do{
    console.log("i =",i);
    i++;
} while(i<=5);


//FOR-OF LOOP
let str ="JAVASCRIPT";
length = 0;
for (let i of str){
     console.log("i =",i);
     length++
}
console.log("length =",length);


//FOR-IN LOOP
let student ={
    name: "Rahul Kumar",
    age:21,
    cgpa:8.2,
    isPasses:true
};
for(let key in student){
    console.log("Key=",key,"value=",student[key]);
}