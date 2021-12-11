require("dotenv").config();
// const regeneratorRuntime = require("regenerator-runtime");
const request = require("supertest");
const app = require("../src/server/serverTest");
const keyGeonames = process.env.USER_NAME_GEONAMES_API;
const keyPixabay = process.env.API_KEY_PIXABAY;
const keyWeatherbit = process.env.API_KEY_WEATHERBIT;

describe("Success process", () => {
  test("It should return object", done => {
    request(app)
      .get("/apiKey")
      .then(response => {
        expect(response.body).toEqual({
          keyGeonames,
          keyPixabay,
          keyWeatherbit
        });
        done();
      });
  });

  test("It should return object", done => {
    request(app)
      .get("/test")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
