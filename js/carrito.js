let productos = [];
let carrito = [];

/*
productos.push(new Producto('Iphone 13 128g',760));
productos.push(new Producto('Iphone 13 256g',820));
productos.push(new Producto('Iphone 14 128g',910));
productos.push(new Producto(Iphone 14 512g',1060));
productos.push(new Producto('MacBook Air M1 13 256gb',1050));
productos.push(new Producto('MacBook Pro 13 1tb',1250));
productos.push(new Producto('MacBook Air M2',1360));
productos.push(new Producto('MacBook Pro 16 1tb',1500));
productos.push(new Producto('Airpods 2da generacion',150));
productos.push(new Producto('Airpods Pro 2',180));
productos.push(new Producto('Apple Watch SE 2',280));
productos.push(new Producto('Apple Watch SE',240));

localStorage.setItem('productos', JSON.stringify(productos));

*/
///obtengo los elementos necesarios del DOM
const selectProductos = document.querySelector('#productos');
const btnAgregar = document.querySelector('#agregar');


////traer los productos del localStorage
function traerItemsStorage() {
    productos = JSON.parse(localStorage.getItem('productos')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

}


function popularDropdown() {
    productos.forEach(({nombre,precio}, index) => { 
        ////aca voy a dibujar las opciones dentro del body del select
        const option = document.createElement('option');
        option.textContent = `${nombre} - $${precio}`;
        option.value = index; ///con esto nos guiamos para saber que objeto del array SELECCIONA
        selectProductos.appendChild(option);
    });
}

///DOMContentLoaded es un evento que se triggerea (dispara) cuando se carga el documento completamente
document.addEventListener('DOMContentLoaded', () => {
    traerItemsStorage();
    popularDropdown();
    dibujarTabla();


    ///event listener de agregar un producto al carrito
    btnAgregar.addEventListener('submit', (e) => {
        e.preventDefault();
        const productoSeleccionado = productos.find((item,index) => index === +selectProductos.value);
        //const productoSeleccionado = productos[+selectProductos.value];
        if (productoSeleccionado === undefined) {
            alert('Usted primero debe seleccionar un producto');
            return; ///hago finalizar la funcion
        }
        ///busco el indice del item en el carrito
        const indiceCarrito = carrito.findIndex((item) => item.producto.nombre === productoSeleccionado.nombre);

        if (indiceCarrito !== -1) { ///encontro el item
            carrito[indiceCarrito].cantidad++;
        }else {
            const item = new Item(productoSeleccionado,1);
            ///lo agrego al carrito
            carrito.push(item);
        }

        localStorage.setItem('carrito',JSON.stringify(carrito)); ///guardo el carrito actualizado en el localStorage
        dibujarTabla();
    })

})




function dibujarTabla() {
    const bodyTabla = document.getElementById('items');
    const total = document.querySelector('#total');
    bodyTabla.innerHTML = ``; ///me aseguro de que el body de la tabla no contenga filas
    carrito.forEach((item) => {
        const {producto: {nombre:nombrecin,precio}, cantidad} = item;
       // const {nombre, marca,precio} = producto;
        bodyTabla.innerHTML = bodyTabla.innerHTML +  `
        <tr class="text-white">
            <td >${nombrecin || ''}</td>
            <td>$${precio || ''}</td>
            <td>${cantidad || ''}</td>
            <td>${cantidad * precio || 0}</td>
        </tr>
    `;

    ///calculo el total que tengo
        total.textContent = carrito.reduce((acc,item) => acc + item.producto.precio*item.cantidad , 0);

    });
}