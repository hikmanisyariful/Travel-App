// Import Styles
import "./styles/styles.scss";
import "./styles/header.scss";
import "./styles/form.scss";
import "./styles/results.scss";
import "./styles/footer.scss";

// Import JS
import { app } from "../client/js/app";
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
  validationEmptyInput,
  printDate
} from "../client/js/helper.js";
import { renderResultsUI } from "../client/js/renderResultsUI";
import { navigation } from "../client/js/navigation";
import { isNotFoundLatLng, isNotFoundPicture } from "../client/js/isNotFound";
import { render404 } from "../client/js/render404";

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
  validationEmptyInput,
  printDate,
  isNotFoundLatLng,
  isNotFoundPicture,
  render404
};
