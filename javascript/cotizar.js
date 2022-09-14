
/* Comienzo de function y evento que suma la edad y el plan que quiere el usuario */

function suma_planes(){
    let edad = document.getElementById("edad_usuario");
    let niño = edad.value <=12 ? 3000 : 0
    let adolescente = edad.value <= 19 && edad.value >= 13 ? 5000 : 0
    let joven = edad.value <= 30 && edad.value >= 20 ? 7500 : 0
    let adulto = edad.value <= 60 && edad.value >= 31 ? 13500 : 0
    let plan_usuario = document.getElementById("plan_usuario");
    let standard = plan_usuario.value == 1 ? 4000 : 0
    let premiun = plan_usuario.value == 2 ? 8000 : 0
    let all_inclusive = plan_usuario.value == 3 ? 12000 : 0 
    let suma1 = niño + standard
    let suma2 = niño + premiun
    let suma3 = niño + all_inclusive
    let suma4 = adolescente + standard
    let suma5 = adolescente + premiun
    let suma6 = adolescente + all_inclusive
    let suma7 = joven + standard
    let suma8 = joven + premiun
    let suma9 = joven + all_inclusive
    let suma10 = adulto + standard
    let suma11 = adulto + premiun
    let suma12 = adulto + all_inclusive

if ( suma1 == 7000){

    let parrafos = document.createElement("p");
    parrafos.innerHTML = "El valor final de su cuota mensual es: $7000", 
    parrafos.style.fontFamily = "Arial";
    parrafos.style.fontSize = "30px";
    mensajes.append(parrafos);}
    else if (suma2 == 11000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $11000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma3 == 15000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $15000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma4 == 9000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $9000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma5 == 13000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $13000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma6 == 17000){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $17000", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma7 == 11500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $11500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma8 == 15500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $15500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma9 == 19500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $19500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma10 == 17500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $17500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma11 == 21500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $21500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }
    else if (suma12 == 25500){
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "El valor final de su cuota mensual es: $25500", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);

    }
    else {
        let parrafos = document.createElement("p");
        parrafos.innerHTML = "Por el momento nuestra empresa no trabaja con personas mayores de 60 años. Estamos trabajando en eso , sepa disculpar las molestias", 
        parrafos.style.fontFamily = "Arial";
        parrafos.style.fontSize = "30px";
        mensajes.append(parrafos);
    }


}
 let cotizacion_plan = document.getElementById("cotizar_plan");
cotizacion_plan.addEventListener("click",suma_planes)  
/* Fin funcion y evento que suma la edad con el plan del usuario */











