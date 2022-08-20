
/* Nombre usuario */
let nombre_usuario = prompt("Bienvenido a Italy medical. Ingrese su nombre:")
console.log("Bienvenido a la cotizacion de su plan", nombre_usuario,)
/* Edad usuario */
let edad = prompt("Ingrese su edad")

/* Edades y su valor  */
function edades (){
    if (edad <=12){
        let niño = parseInt(2000)
        console.log("Por su edad le corresponde el plan niño") 
        return niño
    }
    else if (edad <= 19){
        let adolescente = parseInt(4000)
        console.log("Por su edad le corresponde el plan adolescente" )
        return adolescente
    }
    else if (edad <= 30){
        let joven = parseInt(6000)
        console.log("Por su edad le corresponde el plan joven")
        return joven
    }
    else if (edad <= 60){
        let adulto = parseInt(9000)
        console.log("Por su edad le corresponde el plan adulto")
        return adulto
    }

}
/* Fin edades */

/* Planes y su valor */
let plan = prompt("Ingrese el numero del plan que desea cotizar: 1 -Standard, 2 -Premiun, 3 -All inclusive")
function planes (){
    if (plan == "1"){
        let standard = parseInt(4000)
        return standard
    }
    else if (plan == "2"){
        let premiun = parseInt(6000)
        return premiun
    }
    else if (plan == "3"){
        let all_inclusive = parseInt(10000)
        return all_inclusive
    }

}
/* Fin planes  */

/* Variable que suma el valor de edades y planes */
let suma = edades() + planes()

console.log("La cotizacion final de su cuota mensual es:", suma)
