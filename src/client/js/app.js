const getApiKey = async () => {
  const response = await fetch("http://localhost:8081/apiKey");
  const json = await response.json();
  return json;
};

const getLatLongFromGeonamesAPI = async (apiKey, city) => {
  const response = await fetch(
    `http://api.geonames.org/searchJSON?style=SHORT&username=${apiKey}&maxRows=1&q=${city}`
  );
  const json = await response.json();
  return json;
};

const getPredictForecastFromWeatherbitAPI = async (apiKey, payload) => {
  const { lat, lng, days } = payload;
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?key=${apiKey}&lat=${lat}&lon=${lng}&days=${days}`
  );
  const json = await response.json();
  return json;
};

const getCityImageFromPixabayAPI = async (apiKey, city) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${city}&image_type=photo&pretty=true`
  );
  const json = await response.json();
  return json;
};

const app = () => {};

export {
  app,
  getApiKey,
  getLatLongFromGeonamesAPI,
  getPredictForecastFromWeatherbitAPI,
  getCityImageFromPixabayAPI
};
