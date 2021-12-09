import "./styles/styles.scss";
import { handleSubmit } from "../client/js/handleSubmit.js";
import {
  app,
  getApiKey,
  getLatLongFromGeonamesAPI,
  getPredictForecastFromWeatherbitAPI,
  getCityImageFromPixabayAPI
} from "../client/js/app.js";
import { getDays, getPicturesByCity } from "../client/js/helper.js";
import { renderResultsUI } from "../client/js/renderResultsUI";
import { navigation } from "../client/js/navigation";

app();

export {
  app,
  handleSubmit,
  getApiKey,
  getLatLongFromGeonamesAPI,
  getPredictForecastFromWeatherbitAPI,
  getCityImageFromPixabayAPI,
  getDays,
  getPicturesByCity,
  renderResultsUI,
  navigation
};
