
let boton = document.getElementById("boton")
boton.addEventListener("click" , function(){
    let email = document.getElementById("ingresaemail");
    let contraseña = document.getElementById("ingresacontraseña");
    let recuperandoarreglo = localStorage.getItem("nuevos_usuarios");
    recuperandoarreglo = JSON.parse(recuperandoarreglo);
    console.log(recuperandoarreglo)
    if(email.value == recuperandoarreglo.email){
        console.log("Asasdad")
    }


})
