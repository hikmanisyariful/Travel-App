import "./styles/styles.scss";
import { handleSubmit } from "../client/js/handleSubmit.js";
import {
  getApiKey,
  getLatLongFromGeonamesAPI,
  getPredictForecastFromWeatherbitAPI,
  getCityImageFromPixabayAPI
} from "../client/js/fetchApi.js";
import {
  getDays,
  getPicturesByCity,
  validationEmptyInput
} from "../client/js/helper.js";
import { renderResultsUI } from "../client/js/renderResultsUI";
import { navigation } from "../client/js/navigation";
import { app } from "../client/js/app";

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
  navigation,
  validationEmptyInput
};
