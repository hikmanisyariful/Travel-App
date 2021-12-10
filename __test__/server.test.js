require("dotenv").config();
const regeneratorRuntime = require("regenerator-runtime");
// import "regenerator-runtime/runtime";
const express = require("express");
const supertest = require("supertest");
const app = express();
const request = supertest(app);

describe("Success process", () => {
  test("It should return object", async done => {
    const response = await request.get("/test");
    expect(response.statusCode).toBe(200);
  });
});
