const selectCantProdMostrar = document.querySelector ("#cant-productos-mostrar");
const selectCantProdPermitida = document.querySelector ("#cant-producto-permitida");
const selectColores = document.querySelector ("#select-colores");

const divInfoMostrada = document.querySelector ("#info-seleccionada");
const divProdMostrados = document.querySelector ("#contenedor-productos");

const PRODUCTOS = [

{
    imagen:"https://i5.walmartimages.com/asr/665a54b1-9595-4206-bb99-6eb11fc8006e.ed6c4535cf1db99883dc3a79d7fce9d9.jpeg",
    nombre:"Mouse Gamer"
},

{
    imagen:"https://ulrikgaming.cl/wp-content/uploads/2021/04/60709d0691072d0dcd3fbedf.jpg",
    nombre:"Silla Gamer"
},

{
    imagen:"https://atrapazon.com/wp-content/uploads/2018/04/cascos-auriculares-gaming-con-micrfono-arkartech-headset-auricular-gamer-2048x2048.jpg",
    nombre:"Auriculares Gamer"
},

{
    imagen:"https://http2.mlstatic.com/teclado-retroiluminado-gamer-genius-gx-scorpionk215-con-la-n-D_NQ_NP_149711-MCO20633332576_032016-F.jpg",
    nombre: "Teclado Gamer"
},

{
    imagen:"https://http2.mlstatic.com/D_NQ_NP_616399-MLM44353302989_122020-F.jpg",
    nombre:"Escritorio Gamer"
},

{
    imagen:"https://static.hitek.fr/img/products/sony/sony-playstation-4/sony-playstation-4-3.jpg",
    nombre:"Play station 4"
},

{
    imagen:"https://tse3.mm.bing.net/th?id=OIP.Xwq857IyJYNmje9lEuEkLAHaF4&pid=Api&P=0&h=180",
    nombre:"Nintendo Switch"
},

{
    imagen:"https://tse1.mm.bing.net/th?id=OIF.uf8BLrWDnVL491PEhmx0CQ&pid=Api&P=0&h=180",
    nombre: "Realidad Virtual"
},

{
    imagen:"https://tse1.mm.bing.net/th?id=OIP.OjKveg_thgltkYgkNp_-SQHaFU&pid=Api&P=0&h=180",
    nombre:  "Jostin"
},

{
    imagen:"https://images-na.ssl-images-amazon.com/images/I/71yn-k9ScPL._AC_SL1000_.jpg",
    nombre:"Luz led"
}

];


function infoCambios() {
    console.log("prueba");
    opcSeleccionada1 = (selectCantProdMostrar.value);
    opcSeleccionada2 = (selectCantProdPermitida.value);
    opcSeleccionada3 = (selectColores.value);

    divInfoMostrada.innerHTML = `
    <p> La cantidad de productos a mostrar es ${opcSeleccionada1} </p>
    <p> La cantidad de productos permitidos a mostrar ${opcSeleccionada2} </p>
    <p> El tema seleccionado es ${opcSeleccionada3} </p>
    `;
}




function generarProductos() {
    divProdMostrados.innerHTML = "";
    const cantidadProductos = parseInt (selectCantProdMostrar.value);
    for (let i = 0; i < cantidadProductos; i++) {
        producto = PRODUCTOS [i];

        let opcionesCantidad ="";
        const cantidadPermitida = parseInt (selectCantProdPermitida.value);
        
        for (let j = 1; j <= cantidadPermitida; j++) {
            opcionesCantidad += `<option value="${j}">${j}</option>`;
           
        }

        divProdMostrados.innerHTML += `
        <div class="producto">
        <img src="${producto.imagen}" alt="Producto ${i}">
        <h3>${producto.nombre}</h3>
        <p>Metodos de pago:</p>
        <select name="producto" class="producto-mostrado">
          <option value="1">Efectivo</option>
          <option value="2">Débito</option>
          <option value="3">Crédito</option>
        </select>
        <p>Seleccione Cantidad </p>
        <select name="producto-cant" class="producto-cant-total">
        ${opcionesCantidad}
        </select>
        <br>
        <button class="boton-comprar">Comprar</button>
        </div>
        `;
        
    }
    
}


function cambiarColorProducto() {
    const divProductos = document.getElementsByClassName ('producto');

    for (let i = 0; i < divProductos.length; i++) {
        const producto = divProductos[i];
        const numPar = (i + 1) % 2 === 0;

        switch (selectColores.value) {
            case "ninguno":

            if (numPar) {
                producto.style.backgroundColor = "#696969";
                
            } else {
                producto.style.backgroundColor = "#696969";
            }

            break;
            case "azul-verde":
                if (numPar) {
                    producto.style.backgroundColor = "#0000ff";
                    
                } else {
                    producto.style.backgroundColor = "#008000";
                }
                
                break;
                case "marron-negro":
                    if (numPar) {
                        producto.style.backgroundColor = "#8b4513";
                        
                    } else {
                        producto.style.backgroundColor = "#000000";
                    }
                    break;
                case "naranja-amarillo":
                    if (numPar) {
                        producto.style.backgroundColor = "#ff4500";
                        
                    } else {
                        producto.style.backgroundColor = "#ffff00";
                        
                    }    
                break;
        
            default:
            
        } 

    }
    
}

function generarCambios()  {
    infoCambios();
    generarProductos();
    cambiarColorProducto();
    
}