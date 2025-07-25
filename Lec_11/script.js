// id
let box1 = document.getElementById("box1");
console.log(box1);

// query selector
let box2 = document.querySelector("#box3");
console.log(box2);

// query selector all
let boxes3 = document.querySelectorAll(".box");
console.log(boxes3);

// tag name
let boxes1 = document.getElementsByTagName("div");
console.log(boxes1);

// class name
let boxes2 = document.getElementsByClassName("box");
console.log(boxes2);


// document properties

// innerHTML
setTimeout(()=>{
    console.log(box1.innerHTML);        //getter
    box1.innerHTML = `<b>innerHTML<b>`  //setter
}, 10000);


setTimeout(()=>{
    console.log(box1.innerText); //getter
    box1.innerText = `innerText` //setter
}, 10000);