/* Variables que almacenan los datos que ingresamos en los inputs */
let ingreso_usuario = document.getElementById("login");
let ingreso_email_usuario = document.getElementById("user");
let ingreso_contraseña_usuario = document.getElementById("pass");

/* Evento que compara los datos ingresados con los almacenados en el local storage */
ingreso_usuario.addEventListener("submit", (e) => {
    e.preventDefault();
    let loginuser = ingreso_email_usuario.value;
    let loginpass = ingreso_contraseña_usuario.value;
    let recuperandoarreglo = localStorage.getItem("nuevos_usuarios");
    recuperandoarreglo = JSON.parse(recuperandoarreglo);
    for (let usuario of recuperandoarreglo){
      if(loginuser == usuario.email && loginpass == usuario.contraseña){
       window.location.href = "./cotizar.html"
      } 
      else {
        let contraseña_incorrecta = document.getElementById("contraseña_incorrecta")
        contraseña_incorrecta.innerHTML = `<p> Contraseña incorrecta </p>`
      }
    }
  });


    