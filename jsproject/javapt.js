let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")

let burglist = document.querySelector(".mainul2")
let burgbar = document.querySelector(".burgbar")

let register = document.getElementById("regi");

document.querySelector(".burgbar").addEventListener("click", function(){

  burglist.classList.toggle("show")
  burgbar.classList.toggle("actual")
  burgbar.classList.toggle("fir")
});

register.addEventListener("click", function(){

});


let userN = document.getElementById("user").value;
let password1 = document.getElementById("pass1").value;
let password2 = document.getElementById("pass2").value;

let spanN = document.getElementById("spanN");
let spanP = document.getElementById("spanP");
let spanP2 = document.getElementById("spanP2");

let errors= {}

document.getElementById("form").addEventListener("submit", function(event){
event.preventDefault();

let formal = event.target

 if (userN.length < 5 || userN == ""){
  errors.userN = "Username is to short";
 }

 if (password1.length < 5 || password1 == ""){
  errors.password1 = "Password is to short";
 }

 if (password2 != password1){
  errors.password2 = "Passwords do not match";
 }
 
 formal.querySelectorAll(".span").forEach(function(element){
element.textContent = "";
 });
  
 

 for(let wheel in errors){
  console.log(wheel)

  let spans = document.getElementById("errors_" + wheel);
  console.log(spans)

  if(spans){
    spans.textContent = errors[wheel];

  }

}




});






