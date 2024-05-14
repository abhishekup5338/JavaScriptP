
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

let num = prompt("wnter a number");
if(num %5 === 0){
    console.log(num,"is multiple of 5");
} else
{
    console.log(num, "is NOT a multiple of 5")
}

//4- 