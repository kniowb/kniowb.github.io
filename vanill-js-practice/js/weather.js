const API_KEY = window.APP_CONFIG.APP_ID;


function convertToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(1);
}

//success -> geolocationposition 객체를 유일한 매개변수로 받는 콜백함수
function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const temperatureK = data.main.temp;
            const temperatureC = convertToCelsius(temperatureK); // 섭씨 변환

            city.innerText = `${data.name} ${data.weather[0].main}`;
            weather.innerText = `현재 온도: ${temperatureC}°C `;
        })
}

function onGeoError() {
    alert("Can't find your location");
}
//wifi, 위치, gps..
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
