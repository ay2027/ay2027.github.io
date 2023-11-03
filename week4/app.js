
// step 1
const apiKey = '453e793daf9d2a2ea15548707c2d9416';
const cityInput = document.getElementById("cityInput");
const btn = document.getElementById("btn");
const weatherInfo = document.getElementById("weather-info");

//step 2
btn.addEventListener('click', () => {
    // Step 3
    const cityNames = cityInput.value.split('\n'); // Split input by new lines

    // Check if the input is empty or contains only white spaces
    if (cityNames.every(city => city.trim() === '')) {
        alert('Please enter a city name.');
        return;
    }


    // step 4 ,5 ,6
    cityNames.forEach(cityName => {
        
        if(cityName.trim() === ''){
         return; // skip empty lines
        };
    

    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    const ourRequest = new XMLHttpRequest();
    ourRequest.open('Get',apiUrl,true);

    ourRequest.onload = function() {
    if(ourRequest.status >= 200 && ourRequest.status < 400){
       const data = JSON.parse(ourRequest.responseText);


    //Extract weather information
    const weatherDescription = data.weather[0].description;
    const mainTemperature = data.main.temp;
    const windSpeed = data.wind.speed;


    // Create a weather message
    const weatherMessage = `The weather in ${cityName.trim()} is ${weatherDescription}. The temperature is ${mainTemperature}°C with a wind speed of ${windSpeed} m/s.`;

    const weatherParagraph = document.createElement('p');
                weatherParagraph.textContent = weatherMessage;
                weatherInfo.appendChild(weatherParagraph);

    } else { // Handle errors for individual cities

            const errorParagraph = document.createElement('p');
            errorParagraph.textContent = `Error fetching data for ${cityName.trim()}.`;
            weatherInfo.appendChild(errorParagraph);
            }
    };
    ourRequest.onerror = function() {  // Handle network errors for individual cities
            const errorParagraph = document.createElement('p');
            errorParagraph.textContent = `Error fetching data for ${cityName.trim()}.`;
            weatherInfo.appendChild(errorParagraph);
    };

    ourRequest.send();

    });

});
