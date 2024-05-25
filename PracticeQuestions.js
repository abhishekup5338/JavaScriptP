
//1 - Create a object called "Product" to store information shown in the picture of pen in amazone.

const product ={
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270
};

console.log(product);


//2-  Create a const object called "Profil" to store information shown in picture.

const Profile ={
    username : "abhishekup",
    isFollow : true,
    follower : 212,
    following : 32
};

console.log(Profile);

//3- Get user to input  a number using prompt ("Enter a number:").Check if the number is multiple of 5 or not.

// let num = prompt("wnter a number");
// if(num %5 === 0){
//     console.log(num,"is multiple of 5");
// } else
// {
//     console.log(num, "is NOT a multiple of 5")
// }

//4- Write a code which can give grade to student according to their scores.

let studScore = 45;

if(studScore >=80)
    {
        console.log(studScore,"it's a A grade")
    } 
 else if(studScore >=70 && studScore<79)
    {
      console.log(studScore,"it's a B grade")
     }
 else if(studScore >=60 && studScore<69)
     {
         console.log(studScore,"it's a C grade")
     }
 else if(studScore >=50 && studScore<59)
     {
         console.log(studScore,"it's a D grade")
      }
 else(studScore >=0 && studScore<49)
     {
         console.log(studScore,"Student is failed")
      }


      //5 - Print all even numbers from 0 to 100

      for(let i=0;i<=100;i++){
        if(i%2==0){
            console.log(i)
        }
    };

    //6 - Create a game  where you start with any random game  number.
    // Ask the user to keep guessing the game number until the user enters correct value.

    // let gameNum = 25;

    // let userNum = prompt("Guess the game number :")
    // while(userNum !== gameNum){
    //     userNum = prompt("You entered wrong number. Guess again :");

    // }
    // console.log("Congratulations, you entered the right number");

    // 7 - Prompt the user to enter their full name. Generate a username  for them based on the Input.
    // Start  username with @, followed by their fullname and ending with the fullname length.

    








    //8 - For the given arrray with matks of students -> [85,97,44,37,76,60]
    //   Find the average marks of the entire class

    let marks =  [85,97,44,37,76,60];
    let sum = 0;

    for(let val of marks){
        sum += val;
    }

    let avg = sum/marks.length;
    console.log(`ave marks of the class ${avg}`);


    // Create an array to store a companies name.
    // a. Remove the first companies from array
   // b.Remove Uber and add old
   // c.Add amazon at the end


    let Comp = ["Bloomberg","Microsoft","Uber","Google","IBM","NetFlix"];
    Comp.shift();
    Comp.splice(2,1,"OLA");
    Comp.push("Amazon");


    //Create a function using a "function" keyword that takes a string as an argument & returns the number of vowels in the string.

    function countVowels(str) {
        let count =0;
        for(const char of str){
            if(char === "a" || char === "e" || char==="i" || char==="o" || char==="u"){
                count++;
            }

        }
        console.log(count);
    }

    //


    let mark = [35, 74, 94, 32, 90, 97, 85,71];

   let toppers =  mark.filter((val) => {
       return val > 90;
    });
    console.log(toppers);