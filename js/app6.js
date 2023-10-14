//elementos del DOM

//document

console.log(document);

//accedo a los elementos del DOM

//obtengo un elemento del DOM
//Busco por ID del elemento 

//partiendo desde la raiz
const mih1 = document.getElementById("heading");
console.log(mih1);

/*const mih2 = document.getElementById("heading2");
console.log(mih2);*/

//modifico el contenido de texto del h1
console.log(mih1.textContent);
mih1.textContent = "Bienvenido al carrito de compras";

//modificamos el estilo de texto del h1
mih1.style.color = "black";

///ver las clases
console.log(mih1.classList);

///obtener elementos segeun una clase
const elementosJuan = document.getElementsByClassName("Juan");
console.log(elementosJuan.length);
for(item of elementosJuan){
    console.log(item);
}

for(let i = 0 ; i < elementosJuan.length ; i++){
    console.log(elementosJuan [i]);
}

//html
const contenedorTabla = document.getElementById("contenedorTabla");
console-log(contenedorTabla.innerHTML);
contenedorTabla.innerHTML = 
    <table class="table table-dark">
    <thead class="thead-dark">
            <tr id="trid">
            <th># item</th>
            <th>Producto</th>
            <th>Almacenamiento</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
        </tr>
    </thead>
    <tbody id="items" class="table-striped"></tbody>
    <tfoot>
        <tr>
           <th id="total"></th> 
        </tr>
    </tfoot>
    </table> 
//clase de los item
class item{
    Producto;
    Cantidad;

    constructor(Producto,Cantidad){
        this.Producto = producto;
        this.Cantidad = Cantidad;
    }
}


//carrito
const carrito = [];
carrito.push(new Producto("Iphone 13 128g", 250, "apple"));
carrito.push(new Producto("Iphone 13 256g", 760, "apple"));
carrito.push(new Producto("Iphone 14 128g", 760, "apple"));
carrito.push(new Producto("Iphone 14 512g", 760, "apple"));

function dibujarTabla() {
    const bodyTabla = document.getElementById("items");
    bodyTabla.innerHTML = "";
    carrito.forEach((item,index) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML +
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.Producto}</td>
            <td>${item.Almacenamiento}</td>
            <td>${item.Cantidad}</td>
            <td>${item.Precio}</td>
        </tr>
    ;

    })
}