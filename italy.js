
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
let cotizar = edades()+ planes();
console.log("La cotizacion final de su cuota mensual es:", cotizar) 



/* Comienzo de registrarse*/
 class usuario {
    constructor(nombre,apellido,email,dni,precio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.dni = dni;
        this.precio = precio;
    }
}
let lista_usuarios = [];
for (let i = 0 ; i < 1; i ++){
    let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let email = prompt("Ingrese su email")
  let dni = (prompt("Ingrese su DNI"));
  let precio = edades()+ planes();
  let nuevo_usuario = new usuario(nombre,apellido, email,dni, precio);
  lista_usuarios.push(nuevo_usuario);
}
for (let usuario of lista_usuarios){
    console.log (lista_usuarios);
    }
    console.log ("Su cuenta a sido creada con exito"); 
    /* Fin de registrarse */


   /* Comienzo de aumento  */ 
    function precio_cuarto_mes (usuario){
        let aumento = usuario.precio * 0.30; 
        return {
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          email: usuario.email,
          dni: usuario.dni,
          precio: usuario.precio+ aumento ,
        
      };
    }
      let precio_con_aumento = lista_usuarios.map (precio_cuarto_mes);
      console.log("Su plan dentro de 4 meses quedara de la siguiente manera", precio_con_aumento);
      /* Fin de aumento */