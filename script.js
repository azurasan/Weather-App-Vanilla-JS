// DOM Selection
const input = document.querySelector("input");
const searchBtn = document.querySelector("button");
const city = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const result = document.querySelector(".weather");
const img = document.querySelector("img");

searchBtn.addEventListener("click", async function () {
	const weathers = await getWeather(input.value);
	input.value = "";
});

function getWeather(keyword) {
	// get data from API
	return (
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&yourapikey`
		)
			// parse into JSON
			.then((response) => response.json())
			// execute displayResults
			.then(displayResults)
	);
}

function displayResults(response) {
	try {
		// console.log(response);
		city.innerHTML = `${response.name} , ${response.sys.country}`;
		temperature.innerHTML = `${Math.floor(response.main.temp / 10)}°C`;
		result.innerHTML = response.weather[0].description;
	} catch (e) {
		console.error(e);
		city.innerHTML = "Not Found";
		temperature.innerHTML = "";
		result.innerHTML = "";
	}
}
