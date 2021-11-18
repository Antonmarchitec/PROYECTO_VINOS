let containerHeader = document.getElementById("containerHeader"); 
let positionElement = containerHeader.offsetTop
console.log(positionElement)



document.addEventListener("scroll", ()=>{
   
    let positionScroll = document.scscrollTop()
    console.log(positionScroll)
})