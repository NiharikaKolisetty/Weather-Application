const apiKey = "6f664ad22a59f8040fe3f42483fe8f18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".back-btn").style.display = "block";
    }else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="images/clouds.png"; 
        } else if (data.weather[0].main == "Clear"){
            weatherIcon.src ="images/clear.png"; 
        }else if (data.weather[0].main == "Rain"){
            weatherIcon.src ="images/rain.png"; 
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src ="images/drizzle.png"; 
        }else if (data.weather[0].main == "Mist"){
            weatherIcon.src ="images/mist.png"; 
        }else if (data.weather[0].main == "Snow"){
            weatherIcon.src ="images/snow.png"; 
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".back-btn").style.display = "block";
    }
  
    
}

searchBox.addEventListener("keypress", (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
        const city = searchBox.value;
        if (city) {
            checkWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    }
});

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

