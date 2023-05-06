function currentTimeFormart(date) {
  let hrs = date.getHours();
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }

  let mins = date.getMinutes();

  if (mins < 10) {
    mins = `0${mins}`;
  }

  let day = date.getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = weekdays[day];

  return `${today} ${hrs}:${mins}`;
}

// function searchLocation(poaition) {
//      let apiKey = "5da7b2dc058f07286fea39c4cee516a3";

// }
// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchcitycity(cities) {
  let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function searchSubmit(event) {
  event.preventDefault();

  let cities = document.querySelector("#city-search").value;
  searchcitycity(cities);

  //   let cityElement = document.querySelector("#city");

  //   let citySearch = document.querySelector("#city-search");
  //   cityElement.innerHTML = citySearch.value;
}

let currentDate = document.querySelector("#today-date");
let currentTime = new Date();

let formSearch = document.querySelector("#searchForm");

formSearch.addEventListener("submit", searchSubmit);

currentDate.innerHTML = currentTimeFormart(currentTime);

// let currentLocation = document.querySelector("#current-Location");
// currentLocation.addEventListener("click", getCurrentLocation);
// searchcitycity("New York");
