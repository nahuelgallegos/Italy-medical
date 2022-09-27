/* Funcion que calcula el valor de la edad del usuario */
function edades(){
    let edad = document.getElementById("edad_usuario");
    let valor_edad = 0
    
    if(edad.value <=12 && edad.value >=1){
        valor_edad = 3000
        return valor_edad
    }
    else if(edad.value <=19 && edad.value >=13){
        valor_edad = 5000
        return valor_edad
    }
    else if(edad.value <=30 && edad.value >=20){
        valor_edad = 7500
        return valor_edad
    }
    else if(edad.value <=60 && edad.value >=31){
        valor_edad = 13500
        return valor_edad
    }
}
/* Funcion que calcula el valor del plan del usuario */
function planes (){
    let plan = document.getElementById("plan_usuario");
    let valor_plan = 0

    if(plan.value == "1"){
        valor_plan = 4000
        return valor_plan
    }
    else if (plan.value == "2"){
        valor_plan = 8000
        return valor_plan
    }
    else if (plan.value == "3"){
        valor_plan = 12000
        return valor_plan
    }
}

/* Comienzo de function y evento que suma la edad y el plan que quiere el usuario */
function suma_planes(){
    let total = edades() + planes()
    let edad = document.getElementById("edad_usuario");
    if (total <=25500){
        Swal.fire(`El valor final de su cuota mensual es: ${total} ` )
    }
    else if (edad.value > 60){
        Swal.fire(`Por el momento nuestra empresa no trabaja con personas mayores de 60 años. Estamos trabajando en eso, sepa disculpar las molestias! ` )
    }
    else {
        Swal.fire(`Ingrese bien los datos solicitados para cotizar su plan!` )
    }
}

 let cotizacion_plan = document.getElementById("cotizar_plan");
cotizacion_plan.addEventListener("click",suma_planes)  
/* Fin funcion y evento que suma la edad con el plan del usuario */











