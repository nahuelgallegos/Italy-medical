/* Array que almacena los nuevos usuarios */
let nuevos_usuarios = [];

/* Variables que almacenan los datos que ingresamos en los inputs */
let email_usuario = document.getElementById("email");
let contraseña_usuario = document.getElementById("contraseña");
let registro_usuario = document.getElementById("register");

/* Clase que construye un nuevo usuario */
class Usuario {
  constructor (email, contraseña){
    this.email = email
    this.contraseña = contraseña
  }
};

/* Evento que crea un nuevo usuario , lo almacena en el local storage y lo pusheea a el arreglo de nuevos usuarios */
registro_usuario.addEventListener("submit",(e) => {
  e.preventDefault();
  if(email_usuario.value != "" && contraseña_usuario.value != ""){
    let nuevo_usuario = new Usuario(email_usuario.value, contraseña_usuario.value);
    nuevos_usuarios.push(nuevo_usuario);
    let arreglojson = JSON.stringify(nuevos_usuarios);
    localStorage.setItem("nuevos_usuarios",arreglojson);
    Swal.fire({
      imageUrl: '../multimedia/registroexitoso.png',
      imageHeight: 200,
      imageAlt: 'Registro exitoso'
    })
  }
});

