

///el no tener nada almacenado javascript lo denomina como un tipo de dato llamado 'undefined'

/// mensaje de dialogo "alert"
alert ("¡Bienvenido a Appletatch! A continuacion complete el registro.")

//inicio de sesion
let correo;
let contraseña;
let resultado;

correo = prompt("Ingrese correo electronico");
contraseña = prompt("Ingrese una contraseña");
resultado = parseFloat(correo) + parseFloat(contraseña);
alert ("Perfecto! Su cuenta ha sido creada")

/// un prograsma que le permita al usuario meter elementos en el carrito de compras
/// hasta que el decida no ingresar mas introcudiendo la palabra "no"
/// una vez que el usuario dijo que no se va a mostrar el total

/// ingresar un elemento
/// ingresar precio
/// ingresar cantidad

let precio;
let cantidad;
let total = 0;
let continuar = "si";

while (continuar == "si") {
    precio = +prompt("ingrese precio del nuevo producto");
    cantidad = +prompt("ingrese cantidad del producto");
    total = total + precio * cantidad;
    continuar = prompt("desea ingresar otro item en el carrito? si/no");
}

alert("el total del carrito es de $" + total);
