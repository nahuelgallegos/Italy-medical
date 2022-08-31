
/* Funcion para saber la edad del usuario */
function validar(){
    let nombre = document.getElementById("edad_usuario");
    let mensaje = document.getElementById("mensaje");

    if (nombre.value <= 12 ){
        let parrafo = document.createElement("p");
        parrafo.innerText = "Por su edad le corresponde el plan niño, que tiene un valor de $4000";
        parrafo.style.fontFamily = "Arial";
        parrafo.style.fontSize = "30px";
        mensaje.append(parrafo);
    }

    else if (nombre.value <= 19){
        let parrafo = document.createElement("p");
        parrafo.innerText = "Por su edad le corresponde el plan Adolescente, que tiene un valor de $6000";
        parrafo.style.fontFamily = "Arial";
        parrafo.style.fontSize = "30px";
        mensaje.append(parrafo);
    }

    else if (nombre.value <=30){
        let parrafo = document.createElement("p");
        parrafo.innerText = "Por su edad le corresponde el plan Joven , que tiene un valor de $8000";
        parrafo.style.fontFamily = "Arial";
        parrafo.style.fontSize = "30px";
        mensaje.append(parrafo);
    }

    else if (nombre.value <=60){
        let parrafo = document.createElement("p");
        parrafo.innerText = "Por su edad le corresponde el plan Adulto , que tiene un valor de $10000";
        parrafo.style.fontFamily = "Arial";
        parrafo.style.fontSize = "30px";
        mensaje.append(parrafo);
    }
    else{
        document.body.innerHTML = ` <p> Por el momento nuestra empresa no trabaja con personas mayores de 60 años , sepa disculpar las molestias. Estamos trabajando en eso!  </p> `
    }
}
/* Fin funcion edad usuario */



/* Funcion para saber que plan quiere el usuario */
function planes(){
    let plan_usuario = document.getElementById("plan_usuario");
    let mensajes = document.getElementById("mensajes");

    if (plan_usuario.value == 1) {
        let parrafos = document.createElement("p");
        parrafos.innerText = "Usted a elegido el plan Standard, que tiene un valor de $6000";
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (plan_usuario.value == 2){
        let parrafos = document.createElement("p");
        parrafos.innerText = "Usted a elegido el plan Premiun, que tiene un valor de $10000";
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);

    }
    else if (plan_usuario.value == 3){
        let parrafos = document.createElement("p");
        parrafos.innerText = "Usted a elegido el plan All inclusive, que tiene un valor de $12000";
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
}
/* Fin funcion plan usuario */
