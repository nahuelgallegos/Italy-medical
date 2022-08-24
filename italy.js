
/* Edad usuario */
let edad = prompt("Bienvenido a Italy medical.Para cotizar su plan por favor ingrese su edad")

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


/* Comienzo de registrarse*/
class usuario {
    constructor(nombre,apellido,email,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.dni = dni;
    }
}

let lista_usuarios = [];
for (let i = 0 ; i < 1; i ++){
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let email = prompt("Ingrese su email")
  let dni = (prompt("Ingrese su DNI"));
  let nuevo_usuario = new usuario(nombre,apellido, email,dni);
  lista_usuarios.push(nuevo_usuario);
}
for (let usuario of lista_usuarios){
    console.log (usuario);
    }
console.log ("Su cuenta a sido creada con exito");
/* Fin de registrarse */


