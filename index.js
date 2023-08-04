let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let currentDay = `${day},${hour}:${minute}`;

let date = document.querySelector("#date");
date.innerHTML = `${currentDay}`;

function submitButton(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchCity.value}`;
}

let submitId = document.querySelector("#submit-id");
submitId.addEventListener("submit", submitButton);

function searchDegree() {
  let degreeButton = document.querySelector("#degree-button");
  degreeButton.innerHTML = `72`;
}
let fahrenheitSearch = document.querySelector("#fahrenheit-search");
fahrenheitSearch.addEventListener("click", searchDegree);
function searchCelsiusDegree() {
  let degreeButton = document.querySelector("#degree-button");
  degreeButton.innerHTML = `27`;
}
let celsiusSearch = document.querySelector("#celsius-search");
celsiusSearch.addEventListener("click", searchCelsiusDegree);
