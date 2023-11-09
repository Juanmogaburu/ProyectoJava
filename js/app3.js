/*
let total = 0;
let continuar = "si";

//productos disponibles y sus precios
let productos = [
    {nombre: "MacBook Air M1 13 256gb", precio: 1050},
    {nombre: "MacBook Pro 13 1tb", precio:1250},
    {nombre: "MacBook Air M2", precio:1360},
    {nombre: "MacBook Pro 16 1tb", precio:1500}
];
//bucle para que el cliente ingrese o no ingrese mas productos al carrito las veces que quiera
while (continuar == "si") {
    alert("ingrese el numero correspondiente al producto:\n1. MacBook Air M1 13 256gb \n2. MacBook Pro 13 1tb \n3. MacBook Air M2 \n4. MacBook Pro 16 1tb")// alerta con los productos ennumerados
    let seleccion = prompt("ingrese el numero correspondiente al producto")// para que el usuario elija el producto

    let index = parseInt(seleccion) - 1;

    if (index >= 0 && index <productos.length) {
        let cantidad = prompt("ingrese la cantidad del producto") //para ingresar la cantidad del producto
        let precio = productos[index].precio; //para sacar el precio de los productos
        let subtotal = precio * cantidad; // calcula el subtotal
        total += subtotal; // el total es igual al subtotal hasta este momento
        alert("productos añadidos al carrito, el subtotal es de u$"+subtotal); //subtotal del carrito
    } else {
        alert ("opcion no válida."); // alerta para opciones no validas
    }
    continuar = prompt("desea seguir añadiendo productos al carrito? si/no")
}
    alert("el total de su carrito es de: u$" + total)
*/