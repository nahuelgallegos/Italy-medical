/* Arreglo para ir guardando todos los nuevos usuarios */
let nuevos_usuarios = []

/* Funcion que toma los datos del usuario ,los guarda en el local storage y da un mensaje de que el registro a sido exitoso */
function set_data(){
let nombre_usuario = document.getElementById("nombre");
let apellido_usuario = document.getElementById("apellido");
let email_usuario = document.getElementById("email");
let contraseña_usuario = document.getElementById("contraseña");
let usuario = {nombre: nombre_usuario.value, apellido: apellido_usuario.value , email: email_usuario.value , contraseña: contraseña_usuario.value}
nuevos_usuarios.push(usuario)
let arreglojson = JSON.stringify(nuevos_usuarios)
localStorage.setItem("nuevos_usuarios",arreglojson)
let recuperandoarreglo = localStorage.getItem("nuevos_usuarios")
recuperandoarreglo = JSON.parse(recuperandoarreglo)
};
let boton = document.getElementById("boton");
boton.addEventListener("click", set_data);
let registroexitoso = document.getElementById("registrar");
boton.addEventListener("click", function(){
    let imagen = document.getElementById("registrateaca")
    imagen.src = "../multimedia/registroexitoso.png"

})