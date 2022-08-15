/* Nombre del usuario */
let nombre_usuario = prompt("Ingrese su nombre")
console.log ("Bienvenido a Italy Medical" , nombre_usuario);
/* Edad del usuario */
let edad_usuario = prompt("Ingrese su edad");
/* Valor de el plan standard */
let plan_standard = parseInt("6000");
/* Valor del plan premiun */
let plan_premiun = parseInt("9000");
/* Valor de plan allinclusive */
let plan_allinclusive = parseInt("14000");
/* Valor de los niños */
let niño = parseInt("4000");
/* Valor de los adolescentes */
let Adolescente = parseInt ("6000");
/* Valor de los jovenes */
let Joven = parseInt("9000");
/* Valor de los adultos */
let Adulto = parseInt("12000");


/* Comienzo de plan niño */

if(edad_usuario <= 12  ) {
   
    console.log("Por su edad le corresponde el plan Niño")
    let plan = prompt ("Elija el numero del plan que desea cotizar: 1- Plan Standard , 2- Plan Premiun , 3- Plan All inclusive")
    if (plan == "1"){
        let suma = plan_standard + niño ;
        console.log("La cotizacion de su plan Niño Standard es:" , suma)

    }
    else if (plan == "2"){
        let suma_premiun = plan_premiun + niño ;
        console.log("La cotizacion de su plan Niño Premiun es:" , suma_premiun)

    }
    else if (plan == "3"){
        let suma_allinclusive = plan_allinclusive + niño ;
        console.log("La cotizacion de su plan Niño All inclusive es:" , suma_allinclusive)

    }

}
/* Fin de plan niño */

/* Comienzo de plan adolescente */

else if (edad_usuario <= 19 ){
    console.log("Por su edad le corresponde el plan Adolescente")
    let plan = prompt ("Elija el numero del plan que desea cotizar: 1- Plan Standard , 2- Plan Premiun , 3- Plan All inclusive")
    if (plan == "1"){
        let suma = plan_standard + Adolescente ;
        console.log("La cotizacion de su plan Adolescente Standard es:" , suma)

    }
    else if (plan == "2"){
        let suma_premiun = plan_premiun + Adolescente ;
        console.log("La cotizacion de su plan Adolescente Premiun es:" , suma_premiun)

    }
    else if (plan == "3"){
        let suma_allinclusive = plan_allinclusive + Adolescente ;
        console.log("La cotizacion de su plan Adolescente All inclusive es:" , suma_allinclusive)

    }
}
/* Fin plan adolescente */

/* Comienzo plan joven */

else if (edad_usuario <= 30 ){
    console.log("Por su edad le corresponde el plan Joven")
    let plan = prompt ("Elija el numero del plan que desea cotizar: 1- Plan Standard , 2- Plan Premiun , 3- Plan All inclusive")
    if (plan == "1"){
        let suma = plan_standard + Joven ;
        console.log("La cotizacion de su plan Joven Standard es:" , suma)

    }
    else if (plan == "2"){
        let suma_premiun = plan_premiun + Joven ;
        console.log("La cotizacion de su plan Joven Premiun es:" , suma_premiun)

    }
    else if (plan == "3"){
        let suma_allinclusive = plan_allinclusive + Joven ;
        console.log("La cotizacion de su plan Joven All inclusive es:" , suma_allinclusive)

    }
}
/* Fin plan joven */

/* Comienzo plan adulto */
else if (edad_usuario <= 60 ){
    console.log("Por su edad le corresponde el plan Adulto")
    let plan = prompt ("Elija el numero del plan que desea cotizar: 1- Plan Standard , 2- Plan Premiun , 3- Plan All inclusive")
    if (plan == "1"){
        let suma = plan_standard + Adulto ;
        console.log("La cotizacion de su plan Adulto Standard es:" , suma)

    }
    else if (plan == "2"){
        let suma_premiun = plan_premiun + Adulto ;
        console.log("La cotizacion de su plan Adulto Premiun es:" , suma_premiun)

    }
    else if (plan == "3"){
        let suma_allinclusive = plan_allinclusive + Adulto ;
        console.log("La cotizacion de su plan Adulto All inclusive es:" , suma_allinclusive)

    }
}
/* Fin plan adulto */

/* Si la persona que desea adquirir el plan es mayor de 60 años */
else {
    console.log("¨Por el momento nuestra empresa no trabaja con personas mayores de 60 años.")
}




