"use strict"

// let rightIcon = document.querySelector(".slider-area .slider .icons i:nth-child(2)")
// let leftIcon = document.querySelector(".slider-area .slider .icons i:nth-child(1)")


// rightIcon.addEventListener("click",function(){
//     let activeSlider = document.querySelector(".active-slider");
//     if(activeSlider.nextElementSibling != null){
//         activeSlider.classList.remove("active-slider");
//         activeSlider.nextElementSibling.classList.add("active-slider");
//     }else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider");
//     }

// })

// leftIcon.addEventListener("click",function(){
//     let activeSlider = document.querySelector(".active-slider");
//     if(activeSlider.previousElementSibling != null){
//         activeSlider.classList.remove("active-slider");
//         activeSlider.previousElementSibling.classList.add("active-slider");
//     }else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.lastElementChild.classList.add("active-slider");
//     }

// })



// setInterval(() => {


//     let activeSlider = document.querySelector(".active-slider");
//     if(activeSlider.previousElementSibling != null){
//         activeSlider.classList.remove("active-slider");
//         activeSlider.previousElementSibling.classList.add("active-slider");
//     }else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.lastElementChild.classList.add("active-slider");
//     }

// }, 1500);


//function !

// function leftSlider(){
//     let activeSlider = document.querySelector(".active-slider");
//     if(activeSlider.nextElementSibling != null){
//         activeSlider.classList.remove("active-slider");
//         activeSlider.nextElementSibling.classList.add("active-slider");
//     }else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider");
//     }

// }



// function rightSlider(){

//     let activeSlider = document.querySelector(".active-slider");
//     if(activeSlider.previousElementSibling != null){
//         activeSlider.classList.remove("active-slider");
//         activeSlider.previousElementSibling.classList.add("active-slider");
//     }else{
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.lastElementChild.classList.add("active-slider");
//     }
// }



// leftIcon.addEventListener("click", leftSlider)

// rightIcon.addEventListener("click", rightSlider)




// setTimeout(() => {
//     setInterval(() => {
//         rightSlider();
//       }, 1000);
// }, 2000);





// let a =document.querySelector("a");

// let fileInput = document.querySelector("input");

// a.addEventListener("click",function(e){
//     e.preventDefault();
//     // console.log(e.target);
//     //  console.log(e.target.innerText);

// })


// fileInput.addEventListener("change", function(e){
//     console.log(e);
// })


// let dragElem = document.getElementById("drag-elem");
// let dropElem = document.getElementById("drop-elem");


// dragElem.ondragstart = () => {
//     console.log("drag-start");
// }

// dragElem.ondrag = () => {
//     console.log("dragging");
// }

// dragElem.ondragend = () => {
//     console.log("drag-end");
// }


// dropElem.ordragleave = ( ) => {
//     console.log("leave");
// }


//  



let dragElem = document.getElementById("drag-elem");
let dropElem = document.getElementById("drop-elem");
let dropElem2 = document.getElementById("drop-elem2");


dragElem.ondragstart = (e) => {
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id", id); 
    // e.dataTransfer.setData("test","kjdahks")
    
}


dropElem.ondragover = (e) => {
    e.preventDefault();
}




dropElem.ondrop= (e) => {
    // let id = e.dataTransfer.getData("id")
    // console.log(id);

    e.target.append(document.getElementById(e.dataTransfer.getData("id")))
}



dropElem2.ondragover =(e) =>{
    e.preventDefault();
}


dropElem2.ondrop = (e) => {
    e.target.append(document.getElementById(e.dataTransfer.getData("id")))
}

