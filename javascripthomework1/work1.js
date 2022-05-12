// 1
let mole = {
   firstname: "giorgi",
    lastname: "smith",
    age: 25,
   studentstatus: "active"
  };

console.log(mole.studentstatus);

//2

let buda = ["a", "b", "c", 'd', "e", "f", "g", "h", "i", "j"];

for(let a of buda){
    console.log(a);
}



//3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let b = 0; b > 5; b++){
    console.log(numbers[b]);
}

 //ver gavakete

//4

if (mole.age > 18 && mole.studentstatus == "active"){
    console.log("hello");
}
else if(mole.firstname == "levan"){
    console.log("hello giorgi");
}
else if(mole.studentstatus == "active" || mole.age < 25){
    console.log("hello world");
}
else console.log("error")
//5

let array = ["watermelon", "pear", [10, 45, 50,], "apple", "ananas" ]
console.log(array[2])


//6

let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
console.log(array2[0][0])

// ver gavakete (shemilia calke davlogo magram mgoni egre ar unda gavaketo)

//7

let array3 = [32, 10, "hello", null, "hello2", 50 ];

// ver gavakete


