const main = document.querySelector('#main')
const form = document.querySelector('form')
const city = document.querySelector('#city')

async function getWeather(city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=MR7UXGQFMN6DTQ5GDNSC4WSGD`)
    const data = await response.json()
    console.log(data, 'this is the data')
    console.log(data.address, 'this is the city')

    main.textContent = data.resolvedAddress
    main.innerHTML += `, Temp : ${data.currentConditions.temp}`
    main.textContent += `, Feels like : ${data.currentConditions.feelslike}`
    main.textContent += `, Humidity : ${data.currentConditions.humidity}%`

    //display
    // temp, 
}
getWeather('london')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchedCity = city.value

    getWeather(searchedCity)
})