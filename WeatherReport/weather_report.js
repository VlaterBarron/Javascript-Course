function showWeatherDetails(event){
    event.preventDefault();

    const lat = document.getElementById("latitude").value;
    const lon = document.getElementById("longitude").value;
    const apiKey = "0b88b119c5c3249eb5081e38fd98f182";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails );
