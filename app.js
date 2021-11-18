let carrito={}
document.addEventListener("DOMContentLoaded", ()=>{
    baseDato()
})


const baseDato = async()=>{
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        PintarProductos(data)
        //BotonesCarrito(data)    
        detectarBotones(data)
        //detectarCantidad(data)
        
                
    } catch (error) {
        console.log(error)
    }
}
    

const PintarProductos = (data)=>{
    const contenedorProductos = document.querySelector('#containerSection1')
    const contenedorProductos2 = document.querySelector('#containerSection2')
    const contenedorProductos3 = document.querySelector('#containerSection3')
    const template = document.querySelector('#template-productos')
    const fragment = document.createDocumentFragment()
    const fragment2 = document.createDocumentFragment()
    const fragment3 = document.createDocumentFragment()
    
    data.forEach(producto => {
        producto.cantidad = 10 
        let estado = producto.estado
        if(estado == 1){
            
           const template3 = template.content.querySelector('#imgUnidad1')
           template3.querySelector('.vinoTitle').textContent = producto.title
           template3.querySelector('.contPrecio').textContent = producto.precio
           template3.querySelector('.selectores #dato4').textContent = producto.cantidad
           template3.querySelector('.selectores #siguiente4').dataset.id= producto.id
           template3.querySelector('.selectores #anterior4').dataset.id= producto.id
           template3.querySelector('button').dataset.id= producto.id
           const clone = template3.cloneNode(true)
           fragment.appendChild(clone)
           //console.log(producto.cantidad)
           
           
        }
     else if (estado==2){
            //template3.querySelector('#idcuadro2').setAttribute('src', producto.thumbnailUrl)
            const template3 = template.content.querySelector('#imgUnidad5')
            template3.querySelector('.vinoTitle').textContent = producto.title
           template3.querySelector('.contPrecio').textContent = producto.precio
           template3.querySelector('.selectores #dato4').textContent = producto.cantidad
           template3.querySelector('.selectores #siguiente4').dataset.id= producto.id
           template3.querySelector('.selectores #anterior4').dataset.id= producto.id
           template3.querySelector('button').dataset.id= producto.id

            const clone2 = template3.cloneNode(true)
            fragment2.appendChild(clone2)
        }
        
        else if (estado==3){
            //template3.querySelector('#idcuadro2').setAttribute('src', producto.thumbnailUrl)
            const template3 = template.content.querySelector('#imgUnidad9')
            template3.querySelector('.vinoTitle').textContent = producto.title
           template3.querySelector('.contPrecio').textContent = producto.precio
           template3.querySelector('.selectores #dato4').textContent = producto.cantidad
           template3.querySelector('.selectores #siguiente4').dataset.id= producto.id
           template3.querySelector('.selectores #anterior4').dataset.id= producto.id
           template3.querySelector('button').dataset.id= producto.id

            const clone3 = template3.cloneNode(true)
            fragment3.appendChild(clone3)
        }
        
        
    });
    
    
    contenedorProductos.appendChild(fragment)
    contenedorProductos2.appendChild(fragment2)
    contenedorProductos3.appendChild(fragment3)
    //BotonesCarrito(data)
    
}
/*const BotonesCarrito = (data) =>{

    const BotenesMas = document.querySelectorAll('.selectores #siguiente4')
    console.log(BotenesMas)
    
    BotenesMas.forEach(btn => {
        btn.addEventListener('click', () =>{
            
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 2
            if(producto.hasOwnProperty(producto.id)){
                producto.cantidad = producto.cantidad + 1
                console.log(producto.cantidad)
            }

            
            producto[btn.dataset.id] = {...producto}
            //PintarProductos()
            //console.log(producto[btn.dataset.id])
            PintarProductos(data)

        })
        
    })


}*/


const detectarBotones = (data) => {
    const botones = document.querySelectorAll('.containerSectionCuadroBase #btnGuardarVinos')
    //console.log(botones)
    botones.forEach(btn => {
        btn.addEventListener('click', ()=>{
            // find devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            //console.log(producto)
            producto.cantidad = 2
            if(carrito.hasOwnProperty(producto.id)){
                producto.cantidad = carrito[producto.id].cantidad + 1
                console.log(producto.cantidad)
            }
            carrito[producto.id] = {...producto}
            console.log(carrito[producto.id])
            
            pintarCarrito()
        })
    })
}




/***************************************************************** */
/***************TEMPLATE CARRITO ITEMS*******/
/***************************************************************** */

const items = document.querySelector('.contBasePedido #items')
//console.log(items)
const pintarCarrito =()=>{

    items.innerHTML=''

    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()
    console.log(carrito)
    Object.values(carrito).forEach(producto =>{
        //console.log(producto)
        template.querySelectorAll('td')[0].textContent = producto.title
        template.querySelectorAll('td')[1].textContent = producto.cantidad
        /*template.querySelector('span').textContent = producto.precio*/
        template.querySelectorAll('td')[2].textContent = producto.tipo
        template.querySelectorAll('td')[3].textContent = producto.cantidad * producto.precio
        //template.querySelector('button').dataset.id = producto.id
        console.log(producto.title)
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    
    items.appendChild(fragment)

    pintarFooter()
}



const footer = document.querySelector('.contBasePedido #tota')

const pintarFooter = () =>{
    footer.innerHTML =''

    if(Object.keys(carrito).length === 0){
        footer.innerHTML = '<th scope="row" colspan="5" class="carroVacio">Carrito vacio</th>'
        return
    }
    const template = document.querySelector('#template-footer').content
    const fragmet = document.createDocumentFragment()
    //console.log(template)

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    //console.log(nCantidad)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    //console.log(nPrecio)
    template.querySelectorAll('td')[1].textContent = nCantidad
    template.querySelectorAll('td')[3].textContent = nPrecio

    const clone = template.cloneNode(true)
    fragmet.appendChild(clone)

    footer.appendChild(fragmet)

/***************************************************************** */
/***************FIN TEMPLATE CARRITO ITEMS*******/
/***************************************************************** */











/***************************************************************** */
/***************BOTON VACIAR CARRITO*******/
/***************************************************************** */

    const botonVaciar = document.querySelector('#vaciar-carrito')
    botonVaciar.addEventListener('click', ()=>{
        carrito={}
        pintarCarrito()
    })

    /*const EliminarItem = document.querySelector('.delete')
    EliminarItem.forEach(bt =>{
        bt.addEventListener('click', ()=>{
            console.log('hola')
        })
    })
    /*EliminarItem.addEventListener('click', ()=>{

        console.log(EliminarItem.dataset.id)
    })*/

/***************************************************************** */
/***************BOTON VACIAR CARRITO FIN*******/
/***************************************************************** */






/***************************************************************** */
/***************BOTON ENVIAR *******/
/***************************************************************** */

    const btnEnviar = document.querySelector('#enviarWhat')
    btnEnviar.addEventListener('click', ()=> {
        const producto = Object.values(carrito)
        //console.log(producto)
        numerosDesordenados= []; // array vacio
        for ( i=0; i<producto.length; i++){

         console.log(producto.length)
          var tipos =[producto[i].tipo]
          var Inic="%20%0A%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%97%0A%f0%9f%8d%b7%20"
          var numeros=[producto[i].title]
          var des= "%20%20"
          var paren= "("
          var precios =[producto[i].precio]
          if(tipos == "Unidad"){var paren2 = ")%0a%E2%9C%85%20Unidad:%20"}
          if(tipos == "Paquete"){var paren2 = ")%0a%F0%9F%93%A6%20Paquete:%20"}
          if(tipos == "Galon"){var paren2 = ")%0a%F0%9F%94%8B%20Galon:%20"} 

          var cantidades =[producto[i].cantidad] 
          var subtotal =producto[i].precio * producto[i].cantidad
          var subsubtotal ="%0A%F0%9F%92%B5%20SubTotal%20=%20BS("+subtotal +")"
          var totales ="%0A%0A---------%0A%F0%9F%92%B0%20Total%20a%20pagar:%20"+nPrecio+"%20%0A%0A%0A%E2%98%8EWhatsapp: 62178273%0AFacebook: https://www.facebook.com/cintenovinos"
          //console.log(totales)
           //este es mi array
        
            numerosDesordenados[i] =Inic+numeros+des+precios+paren2+cantidades+subsubtotal 
            
          
        }

        console.log(totales)
        function encodeQueryData(data) {
            let result = [];
            for (let d in data)
              result.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return result.join('&');
          }
          var numeross=[producto[0].title]+"%20%20%0A"  
        console.log(numerosDesordenados)
        var data = numerosDesordenados
        var querystring = encodeQueryData(data);
        let url ="https://web.whatsapp.com/send?phone=59170856061&text=%F0%9F%91%8B%20Hola%20%20%0ADeseo%20estos%20productos:"+numerosDesordenados+totales
        window.open(url);  
         
        })
}

/***************************************************************** */
/***************BOTON ENVIAR FIN *******/
/***************************************************************** */




const dele = () =>{
    const botonesDele = document.querySelectorAll('.tabla .delete')
    console.log(botonesDele)
} 

/*const BotonesCarrito = (data) =>{

    const BotenesMas = document.querySelectorAll('.selectores #siguiente4')
    console.log(BotenesMas)
    
    BotenesMas.forEach(btn => {
        btn.addEventListener('click', () =>{
            //console.log('hola')
            
            //const producto = Object.values(carrito.title)
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            console.log(producto)
            producto.cantidad = 1
            producto.cantidad++
            console.log(producto.cantidad)

        })
    })


}*/
   
const accionBotones = () =>{
    const botonesAgregar = document.querySelectorAll('#items .btn-info')
    const botonesEliminar = document.querySelectorAll('#items .btn-danger')
    console.log(botonesAgregar)
    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () =>{
            
            const producto = carrito[btn.dataset.id]
            //console.log(carrito[btn.dataset.id])
            producto.cantidad++
            carrito[btn.dataset.id] = {...producto}
            pintarCarrito()
        })
    })

    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', () =>{
            const producto = carrito[btn.dataset.id]
            producto.cantidad--
            if(producto.cantidad ===0){
                delete carrito[btn.dataset.id]
                pintarCarrito()
            } else{
                carrito[btn.dataset.id] = {...producto}
                pintarCarrito()
            }
        })
    })

}

const accioncantidad = ()=>{
    const BotenesMas = document.querySelectorAll('.selectores #siguiente4')
    console.log(BotenesMas)
    BotenesMas.forEach(btn => {
        btn.addEventListener('click', () =>{
                 //const producto = data[btn.dataset.id]
        console.log('mas');

        })
       
    })
}
















