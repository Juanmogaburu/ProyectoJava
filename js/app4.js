let continuar = "si";
let total = 0;
//precio de los productos y sus variedades separados
let productos1 = [
    {nombre: "Airpods 2da generacion", precio: 150 },
    {nombre: "Airpods Pro 2", precio: 180}
];
let productos2 = [
    {nombre: "Apple Watch SE 2", precio: 280},
    {nombre: "Apple Watch SE", precio: 240}
]

while (continuar == "si"){
    alert ("elija un tipo de productos: \n1. productos1 - Auriculares inalambricos \n2. productos2 - apple watchs")// los tipos de producto ennumerados

    //prompt ingresar numero para los tipos de productos
    let tipoproducto = prompt("ingrese el numero correspondiente para el producto seleccionado")

    //para elegir los tipos de producto de la seccion de auriculares inalambricos
    if (tipoproducto === "1") {
        alert("ha elegido auriculares inalambricos");

        alert("Auriculares inalambricos disponibles: \n1. Airpods 2da generacion \n2. Airpods Pro 2");
        let seleccion = prompt("ingrese el numero de producto que desea añadir al carrito");
        let index = parseInt(seleccion) - 1;
        
        //calcula el subtotal de la compra de los productos 1
        if (index >= 0 && index < productos1.length) {
            let cantidad = prompt("ingrese cantidad del producto");
            let precio = productos1[index].precio;
            let subtotal = precio * cantidad;
            total += subtotal;
            alert("producto añadido al carrito, el subtotal es de: u$" + subtotal);
        } else{
            alert("opcion no valida.");
        }
        // para elegir los tipos de producto de la seccion apple watches
    } else if (tipoproducto === "2") {
        alert("ha elegido Apple watches");

        alert("auriculares inalambricos disponibles: \n1. Apple Watch SE 2 \n2. Apple Watch SE");
        let seleccion = prompt("ingrese el numero de producto que desea añadir al carrito");
        let index = parseInt(seleccion) - 1;

        //calcula el subtotal de la compra de los productos 2
        if (index >= 0 && index <productos2.length) {
            let cantidad = prompt("ingrese la cantidad");
            let precio = productos2[index].precio;
            let subtotal = precio * cantidad;
            total += subtotal;
            alert("producto añadido al carrito el subtotal es de: u$" + subtotal);
        } else{
            alert("opcion no valida."); // para opciones no validas
        }
    } else {
        alert("opcion no valida."); // para opciones no validas
    }
    continuar = prompt("desea añadir otro item al carrito? si/no"); //para añadir o no mas items al carrito
}
    alert("el total del carrito es: u$" + total);// alerta del total
