

///el no tener nada almacenado javascript lo denomina como un tipo de dato llamado 'undefined'

/// mensaje de dialogo "alert"
function saludar() {
    console.log("¡Hola, bienvenido a nuestra tienda online!"); // una funcion para saludar al cliente
}
saludar();

// Inicio de sesion 
const nombre = prompt("Ingrese su nombre");

let cuentas = []; // Array para almacenar cuentas de usuario

let correo;
let contraseña;
let resultado;

correo = prompt("Ingrese correo electronico");
contraseña = prompt("Ingrese una contraseña");

let cuenta = { // Crear un objeto que represente la cuenta del usuario
    correo: correo,
    contraseña: contraseña
};

cuentas.push(cuenta); // Agregar la cuenta al array de cuentas

resultado = correo + contraseña;
alert ("Perfecto! " + nombre + " , tu cuenta ha sido creada con exito"); // alerta que confirma que ya estas registrado


