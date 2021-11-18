let btnTop = document.querySelector("#btnTop");

document.addEventListener("scroll",() => {
    let positiondelScroll = document.documentElement.scrollTop;  
    //console.log(positiondelScroll);
    let positiondelElemento = btnTop.offsetTop;   //position 334px
    //console.log(positiondelElemento);
    if (positiondelScroll > positiondelElemento){   //534px
        btnTop.classList.add("btnTopJS");
    }else if(positiondelScroll < positiondelElemento){  //484px  
        btnTop.classList.remove("btnTopJS");
    }  
});