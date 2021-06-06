// dilshods 1st example
let element = document.getElementById("myElement");
let closest = element.closest(".container");
if(closest) {
    closest.style.border = "10px solid yellow"
}


// 2nd example
let el = document.getElementById("div-03");
let closest = el.closest(":not(div)");