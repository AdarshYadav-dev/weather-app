// const apikey ="32fc4c5b152331a5dd26766c632579fa";
// const apiurl ="https://api.openweathermap.org/data/2.5/weather?q=germany&appid=&q=bangalore";

// async function checkWeather(){
//     const response = await fetch(apiurl + `&appid=${apikey}`);
//     var data = await response.json();
//     console.log(data);


// }

// checkWeather();


const apikey = "32fc4c5b152331a5dd26766c632579fa";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp") .innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity") .innerHTML = data.main.humidity +"%";
    document.querySelector(".wind") .innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
} 

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

