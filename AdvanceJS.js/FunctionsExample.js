//Block of code that perform a specific task, can be invoked whenever needed

console.log("abc");
"abc".toUpperCase();
[1,2,3].push(4);

//Function means a peace of code which perform same task whenever it executed.
//We can also create our own function

function myFunction(){
    console.log("My name is abhi");
    console.log("SQL Server Developer")
}

myFunction();

// Funtion parameters exist in function block and they act like local variable of function.

//ARROW FUNCTION - A COMPACT WAY OF WRITING A FUNCTION.

const functionName = (a,b) => {
   console.log(a+b);
}

const ArrowMul = (a,b) => {
    console.log(a*b);
}

//forEach Loop in Arrays
arr.ForEach(CallBackFunction)

//CallBackFunction : Here, it is a function to execute for each element in the array
array.forEach(element => {
    
});