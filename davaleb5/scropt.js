document.getElementById("buttid").addEventListener("click", function(a){
    a.target.style.background = "red" ;
});

document.getElementById("inpootis").addEventListener("input", function(b){
    b.target.value = b.target.value.toUpperCase();
});

let put = document.getElementById("inpootis");

let ulo = document.querySelector(".dropper ")




document.getElementById("buttid").addEventListener("click", function(){
    
let insertion = put.value

let list = document.querySelector(".dropper");

let lio = document.createElement('li');

lio.setAttribute("class", "bobus");

lio.textContent = insertion

list.appendChild(lio);



});

let lip = document.querySelectorAll(".bobus")

document.getElementById("butt").addEventListener("click", function(a){
    a.target.style.background = "red" ;

       

        document.querySelector(".bobus").remove();

    
    
    
});



let toggle = document.querySelector(".menu")
let liosli = document.querySelector(".lios")

toggle.addEventListener("click", function(){
    toggle.classList.toggle("scopt");
    liosli.classList.toggle("scopt")

}
)






