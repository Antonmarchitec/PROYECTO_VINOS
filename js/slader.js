let contSladerBase = document.querySelector("#contSladerBase");
let figura = document.querySelectorAll("#figura");

let elUltimaPosicion = figura[figura.length - 1];
//console.log(elUltimaPosicion);
let next = document.getElementById("next");
let prev = document.getElementById("prew");

contSladerBase.insertAdjacentElement("afterbegin" , elUltimaPosicion);



function NEXT(){
    let figuraEnFoco = document.querySelectorAll("#figura")[0];
    contSladerBase.style.marginLeft = "-200%";
    contSladerBase.style.transition = "0.5s all";
    setTimeout(function(){
        contSladerBase.style.transition = "none";
        contSladerBase.insertAdjacentElement("beforeend",figuraEnFoco);
        contSladerBase.style.marginLeft = "-100%";
    },500)
};

   
function PREV(){
    let positionCajas = document.querySelectorAll("#figura");
    let sladerSelectionLast = positionCajas[positionCajas.length - 1];
    contSladerBase.style.marginLeft = "0";
    contSladerBase.style.transition = "0.5s all";
    setTimeout(function(){
        contSladerBase.style.transition = "none";
        contSladerBase.insertAdjacentElement("afterbegin", sladerSelectionLast);
        contSladerBase.style.marginLeft = "-100%";
    },500)
};

next.addEventListener("click" , NEXT);
prev.addEventListener("click" , PREV);    


setInterval(function(){
    NEXT();
},5000);


