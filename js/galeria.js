let contSlader = document.getElementById("contSlader");
let image_element = document.querySelectorAll(".image_element");
let seleccionarUltimoElement = image_element[image_element.length - 1]

let btnLeft = document.getElementById("btnLeft")
let btnRight = document.getElementById("btnRight")

contSlader.insertAdjacentElement("afterbegin", seleccionarUltimoElement);

function Next(){
    let sladerPosicionActual = document.querySelectorAll(".image_element")[0];
    contSlader.style.marginLeft = "-200%";
    contSlader.style.transition = "all 0.9s";
    setTimeout(function(){    //UTILIZA DOS EVENTOS AL MISMO TIEMPO
        contSlader.style.transition = "none";
        contSlader.insertAdjacentElement("beforeend" ,sladerPosicionActual);
        contSlader.style.marginLeft = "-100%";
    },900)
}


function Prev(){
    let sliderSection = document.querySelectorAll(".image_element");
    let sliderSelectionLast = sliderSection[sliderSection.length - 1];
    contSlader.style.marginLeft = "0";
    contSlader.style.transition = "all 0.9s";
    setTimeout(function(){
        contSlader.style.transition = "none";
        contSlader.insertAdjacentElement("afterbegin" ,sliderSelectionLast);
        contSlader.style.marginLeft = "-100%";
    },900)
}

btnRight.addEventListener("click" , Next)
btnLeft.addEventListener("click" , Prev)

setInterval(() => {
    Next()
}, 9000);