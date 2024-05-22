//It is a Collection of items
//It's a linear way to store data

let marks = [18,13,47,62,19];
console.log(marks);
console.log(marks.length); //length is a array property

let heroes = ["abhi","ani","abhishek","abc"];
console.log(heroes);

//Array Indices

console.log(marks[3]);
console.log(marks[3]=66);

//Looping over an Array
for (let idx=0; idx < marks.length; idx++){
    console.log(marks[idx]);
}

//Array methods
//1-Push : add to end 
//2- Pop : delete from end & return
//3- toString : convert array to string
//4- Concat() : joins multiple arrays & returns result
let A = ["ab","za","pa"];
let b = ["an","ni","vi"];
let s = ["abhi","sh"];
let c =A.concat(b,s); //We can concatnate the multiple arrays
console.log(c);

//5- unshift() : add to start the working functionality is same as push method.
console.log(A.unshift("wa","da")); //Add this array at the start 

//6- shift() : delete from start & return the working functionality is same as pop method.
let val = A.shift();
console.log(val); //It will delete the first array that change will see in original array also. 
//7- Slice() : returns the piece of the array  ex- slice(startidx,ensidx)
//8- Splice() : change original array (add, remove, replace) ex- (startidx, delCount,newEl1...)