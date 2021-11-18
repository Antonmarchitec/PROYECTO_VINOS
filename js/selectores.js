
let anterior = document.querySelector("#anterior");
let siguiente = document.querySelector("#siguiente");

let anterior2 = document.querySelector("#anterior2");
let siguiente2 = document.querySelector("#siguiente2");


let anterior3 = document.querySelector("#anterior3");
let siguiente3 = document.querySelector("#siguiente3");


let anterior4 = document.querySelector("#anterior4");
let siguiente4 = document.querySelector("#siguiente4");

let dato = document.querySelector("#dato");


let contador = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

siguiente.addEventListener("click" , () =>{
    contador += 1;
    dato.innerHTML = contador;
    //contador += 1;
});

anterior.addEventListener("click" , () =>{
    if(contador > 0)
    contador = contador - 1;
    dato.innerHTML = contador;
});




siguiente2.addEventListener("click" , () =>{
    contador2 += 1;
    dato2.innerHTML = contador2;
    //contador += 1;
});

anterior2.addEventListener("click" , () =>{
    if(contador2 > 0)
    contador2 = contador2 - 1;
    dato2.innerHTML = contador2;
});




siguiente3.addEventListener("click" , () =>{
    contador3 += 1;
    dato3.innerHTML = contador3;
    //contador += 1;
})

anterior3.addEventListener("click" , () =>{
    if(contador3 > 0)
    contador3 = contador3 - 1;
    dato3.innerHTML = contador3;
});





siguiente4.addEventListener("click" , () =>{
    contador4 += 1;
    dato4.innerHTML = contador4;
    //contador += 1;
})

anterior4.addEventListener("click" , () =>{
    if(contador4 > 0)
    contador4 = contador4 - 1;
    dato4.innerHTML = contador4;
});









