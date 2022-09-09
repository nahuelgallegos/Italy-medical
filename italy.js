/* Funcion para saber la edad del usuario */
function validar(){
    let nombre = document.getElementById("edad_usuario");
    if (nombre.value <= 12 ){
        let niño = parseInt(3000);
        return niño
        
    }

    else if (nombre.value <= 19){
        let adolescente = parseInt(5000);
        return adolescente
    }

    else if (nombre.value <=30){
        let joven = parseInt(7500);
        return joven

    }

    else if (nombre.value <=60){
        let adulto = parseInt(13500);
        return adulto
    }
    else{
        document.body.innerHTML = ` <p> Por el momento nuestra empresa no trabaja con personas mayores de 60 años , sepa disculpar las molestias. Estamos trabajando en eso!  </p> `
    }
    
}
/* Fin funcion edad usuario */


/* Funcion para saber que plan quiere el usuario */
function planes(){
    let plan_usuario = document.getElementById("plan_usuario");
    
    if (plan_usuario.value == 1) {
        let standard = parseInt(4000);
        return standard
    }
    else if (plan_usuario.value == 2){

        let premiun = parseInt(8000);
        return premiun

    }
    else if (plan_usuario.value == 3){
        let all_inclusive = parseInt(12000);
        return all_inclusive
    }

}
/* Fin funcion plan del usuario */

/* Comienzo de function y evento que suma la edad y el plan que quiere el usuario */

let cotizacion_plan = document.getElementById("cotizar_plan");

cotizacion_plan.addEventListener("click", function suma_planes(){
    let suma = validar() + planes()
    if( suma == 7000 ){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $7000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }

    else if (suma == 11000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $11000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 15000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $15000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 9000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $9000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 13000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $13000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 17000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $17000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 11500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $11500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 15500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $15500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 19500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $19500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 17500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $17500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 21500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $21500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma == 25500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $25500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }

})
/* Fin funcion y evento que suma la edad con el plan del usuario */






