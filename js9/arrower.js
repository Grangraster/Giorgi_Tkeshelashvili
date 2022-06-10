let pictures = [
    {
    id: 1,
    title: "chicken",
    image: "chicken.jpg"
},

    {
        id: 2,
        title: "chicken 2",
        image: "chckon.png"
        
    },

    {
        id: 3,
        title: "chicken 3",
        image: "chicj.png"
        
    },


]

let counter = 0



let leftarrow = document.getElementById("leftarrow");
let rightarrow = document.getElementById("rightarrow");
let full = document.querySelector(".fulldiv");
let imageputter = document.getElementById("imageputter")



function imagecreater(item){
    let imag = document.createElement("img");
    imag.setAttribute("src", item.image);
    imag.setAttribute("class", "imagefix");

    return imag
}



function putter(){
    imageputter.innerHTML=""
let imagefinal = imagecreater(pictures[counter]);

imageputter.appendChild(imagefinal)

}



function leftarrowbutton(){
    if (counter == 0){
        counter = pictures.length - 1;
        putter();
        return;
    }
    
    counter--
    putter()
    
    console.log(counter)
    
};

leftarrow.addEventListener("click", leftarrowbutton);

function rightarrowbutton(){
    if (counter == pictures.length - 1){
        counter = 0;
        putter();
        return;
        
    }
    

    
    counter++
    putter()
    
    console.log(counter)
    
};

rightarrow.addEventListener("click", rightarrowbutton);


setInterval(function(){
    rightarrowbutton()
console.log(counter)
}, 8000)



putter()




