/// ingresar un elemento
/// ingresar precio
/// ingresar cantidad

let continuar = "si";
let precio1;

while (continuar == "si") {
    let iphone = alert("ingrese el numero correspondiente al producto");
    let producto = prompt("1. Iphone 13 128g 2. Iphone 13 256g 3. Iphone 14 128g 4. Iphone 14 512g")
    let cantidad = prompt("ingrese cantidad del producto");
    let total = precio1 * cantidad;
    alert(total)
    continuar = prompt("desea ingresar otro item en el carrito? si/no");
}

alert("el total del carrito es de $" + total);