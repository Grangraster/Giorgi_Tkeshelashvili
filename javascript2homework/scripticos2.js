
//1

function borbfun(...n){
    let zeroer = 0
    for(let checker of n){
        if(checker>0){
            zeroer = zeroer + checker
        }
    }
    return zeroer
}

let positivity = borbfun(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)

console.log(positivity)

//2

function wok(...sum){
    let summer = 0
    for(let s of sum ){
        summer = summer + s
    }

    return summer
    
}



let sfl = wok(10, 50, 6, 7, 8, 11, 6, 3, 9)

console.log(sfl)



//3




let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  

function thirder(spain){
    if(spain.isloggedin){
        return spain.firstname + " " + spain.lastname;
    } 
    return false 
}

let bos = thirder(user)
console.log(bos)

//4

function volvo(them){
    let bigone = 0;
    for(let manqana of them){
        if (manqana > bigone){
            bigone = manqana
        }
    }
    return bigone
}

console.log(volvo([1, 3, 5, 7, 2, 1, 6,]))







