require("dotenv").config();
import fetch from "cross-fetch";
import regeneratorRuntime from "regenerator-runtime";

describe("GET API KEY", () => {
  test("It should have USER_NAME_GEONAMES_API", async () => {
    const response = await fetch("http://localhost:8081/apiKey");
    const json = await response.json();
    const userNameAPI = json.keyGeonames;
    expect(userNameAPI).toBe(process.env.USER_NAME_GEONAMES_API);
  });

  test("It should have API_KEY_WEATHERBIT", async () => {
    const response = await fetch("http://localhost:8081/apiKey");
    const json = await response.json();
    const apiKey = json.keyWeatherbit;
    expect(apiKey).toBe(process.env.API_KEY_WEATHERBIT);
  });

  test("It should have API_KEY_PIXABAY", async () => {
    const response = await fetch("http://localhost:8081/apiKey");
    const json = await response.json();
    const apiKey = json.keyPixabay;
    expect(apiKey).toBe(process.env.API_KEY_PIXABAY);
  });
});

describe("GET Lat and Lng from Geonames API", () => {
  test("It should return data which include lat and lng", async () => {
    const apiKey = process.env.USER_NAME_GEONAMES_API;
    const city = "Paris";
    const response = await fetch(
      `http://api.geonames.org/searchJSON?style=SHORT&username=${apiKey}&maxRows=1&q=${city}`
    );
    const json = await response.json();
    const geonames = json.geonames[0];
    expect(geonames).toHaveProperty("lat");
    expect(geonames).toHaveProperty("lng");
  });
});

describe("GET Data of Forecast from Weatherbit API", () => {
  test("It should return data of forecast as same as days of plan", async () => {
    const apiKey = process.env.API_KEY_WEATHERBIT;
    const lat = "48.85341";
    const lng = "2.3488";
    const days = 3;
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?key=${apiKey}&lat=${lat}&lon=${lng}&days=${days}`
    );
    const json = await response.json();
    const dataForecast = json.data.length;
    expect(dataForecast).toBe(days);
  });
});

describe("GET Picture of City from Pixabay API", () => {
  test("It should have webformatURL property ", async () => {
    const apiKey = process.env.API_KEY_PIXABAY;
    const city = "Paris";
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${city}&image_type=photo&pretty=true`
    );
    const json = await response.json();
    expect(json).toHaveProperty("hits");
    const hit = json.hits[0];
    expect(hit).toHaveProperty("webformatURL");
  });
});
