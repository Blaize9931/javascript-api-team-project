// Weather API call for getting the City Name
let apiKey = '2e63d9aadc65efaf2637aa107b187327';

const getCoordinates = (city) => {
  return fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
  )
    .then((res) => res.json())
    .then((data) => {
      return {
        lat: data[0].lat,
        lon: data[0].lon,
      };
    });
};

const getWeatherData = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
  ).then((res) =>
    res.json().then((data) => {
      return data;
    }),
  );
};

const fetchWeatherData = (city) => {
  getCoordinates(city)
    .then(({ lat, lon }) => {
      return getWeatherData(lat, lon);
    })
    .then((weatherData) => console.log(weatherData))
    .catch((error) => console.log('Error: ', error));
};

fetchWeatherData('London');
