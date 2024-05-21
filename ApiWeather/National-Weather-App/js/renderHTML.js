import { convertCelsius } from "./main.js"

// Funcion para renderizar HTMl
export const renderCity = (city, data )=>{

    const imgWeather = city.weather[0].icon;
    const containerHistory = document.querySelector(".containerHistory");

    // DIA
    let img;
    
    
    return `
    <div class="titulo-ciudad">
        <h1 class="title">${city.name}</h1>
    </div>
    <div class="horario-ciudad">
        <div class="contenedor-hora">
        </div>
    </div>
    <div class="clima">
        <h1 class="title-clima">${city.weather[0].description}</h1>
        <div class="contenedor-img">
            <img src="./src/${imgWeather}.png" alt="">
        </div>
        <div class="humedad">
            <p>${city.main.humidity}% Humedad </p>
        </div>
    </div>
    <div class="informacion-temperatura">
        <div class="presicion">
            <p>${city.main.pressure}<span>Hpa</span></p>
        </div>
        <div class="temperatura">
            <p>${convertCelsius(city.main.temp)}°<span><i class="fa-solid fa-temperature-half"></i></span></p>
        </div>
        <div class="sensacion-termica">
            <p>ST <span class="st">${convertCelsius(city.main.feels_like)}°</span></p>
        </div>
        <div class="temperatura-maxima">
            <p class="maxima">${convertCelsius(city.main.temp_max)}°<span>Max</span></p>
            <p class="maxima">${convertCelsius(city.main.temp_min)}°<span>Min</span></p>
        </div>

        <div class="velocidad-viento">
            <p><span><i class="fa-solid fa-wind"></i></span> ${city.wind.speed} <span>km/h</span></p>
        </div>
    </div>
    `
}