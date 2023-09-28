/// ingresar un elemento
/// ingresar precio
/// ingresar cantidad

let continuar = "si";
let total = 0;

let productos = [760, 820, 910, 1060]; // precio de los productos

while (continuar == "si") {
    alert("ingrese el numero correspondiente al producto:\n1. Iphone 13 128g\n2. Iphone 13 256g\n3. Iphone 14 128g\n4. Iphone 14 512g"); // aviso de los productos a disposicion
    let seleccion = prompt("ingrese el numero correspondiente al producto") // para elegir el producto deseado

    let index = parseInt(seleccion) - 1;

    if (index >= 0 && index < productos.length) {
        let cantidad = prompt("ingrese cantidad del producto"); //cantidad de los productos
        let precio = productos[index]; // el precio de los productos
        let subtotal = precio * cantidad; // subtotal de la compra
        total += subtotal; //suma el total y el subtotal
        alert("producto añadido al carrito, el subtotal es: u$"+subtotal); // alerta de subtotal
    } else {
        alert ("opcion no válida."); // alerta para opciones no validas
    }
    

    continuar = prompt("desea ingresar otro item en el carrito? si/no"); // para ingresar o no ingresar mas productos al carrito

}   
    alert("el total del carrito es de u$" + total); // muestra el total del carrito
