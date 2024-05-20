const apiKey="0f21e2084a8a11e8ac49960c4d6a3610";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const res = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data = await res.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display ="block";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})