
//1
let more = [ 5, 25, 89, 120, 36];

more.push("javascript", "python");

more.unshift("html", "css");

more.shift();

more.pop();

more.splice(3, 0,  "moyai")


console.log(more)


//2

let bore = ["banana", "oranj", "pear"];

bore.push("apple", "pineapple");

bore.unshift("watermelon");

bore.splice(2, 0, "mango");

bore.shift()
bore.pop()

console.log(bore)



//3

let arrau = [12, 25, 3, 6, 8, 14, 7, 23];

let finaldivision = arrau.map(function(andria){
    return andria / 3
})

console.log(finaldivision)


//4

let bog = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let finalseperation = bog.filter(function(willy){
    if(typeof willy == "number"){
        return willy
    }
})


console.log(finalseperation)

//5

let languages = ["html", "css", "javascript", "python", "php"];

let finalcounterword = languages.filter(function(words){
    if(words.length > 3){
       return words
    }
});

console.log(finalcounterword)


//6

let words= ['academy', 'of', 'digital', 'industries'].reduce(function(a,b){
    return a + b;
},  
''
)


//arvici ratom ar mushaobs arvici ra aris shecdoma
  
    
 
    
console.log(words);



//7

let itom = [12, "google", 32, null, "yahoo", 25];

let maposfinalos = itom.map(function(itom){
    if(typeof itom == "number"){
       return itom * itom;
    } else if (typeof itom == "string"){
        return itom.toUpperCase();
    }

    return itom
});


console.log(maposfinalos)




// let item = [12, 'google', 32, null, 'yahoo', 25];

// let itdone = item.map(function(item){
// let c = (typeof item == "number") ? item * item:
//         (typeof item  == "string") ? item.toUpperCase():item
//     return c;
// });


//8



 