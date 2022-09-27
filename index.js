
function clima(){
    let ciudad = document.getElementById("ciudad");
    let temperatura = document.getElementById("temperatura");

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ciudad.value+"&units=metric&appid=be67094d432d5ed9083f3b9c18119508")
    .then( response => response.json())
    .then( data => {
        console.log(data)
        temperatura.innerHTML = ` <span> ${data.name}: </span> 
                                 <span> Temperatura actual: ${data.main.temp} | </span>
                                 <span> Temperatura maxima: ${data.main.temp_max} | </span>
                                 <span> Temperatura minima: ${data.main.temp_min} </span>`                        
    });

}
let boton = document.getElementById("boton");
boton.addEventListener("click", clima);
