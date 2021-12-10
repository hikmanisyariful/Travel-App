function handleSubmit(event) {
  event.preventDefault();

  let city = document.getElementById("city").value;
  let date = document.getElementById("schedule").value;
  let forecast;
  let pictures;

  // Validate empty input
  if (!Client.validationEmptyInput(city, date)) {
    // Fetch API for get api key
    Client.getApiKey().then(apiKeys => {
      // Fetch API from Geonames API
      Client.getLatLongFromGeonamesAPI(apiKeys.keyGeonames, city).then(data => {
        const payload = {
          lat: data.geonames[0].lat,
          lng: data.geonames[0].lng,
          days: Client.getDays(date)
        };

        // Fetch API from Weatherbit API
        Client.getPredictForecastFromWeatherbitAPI(
          apiKeys.keyWeatherbit,
          payload
        ).then(({ data }) => {
          forecast = data[data.length - 1];

          // Fetch API from Pixabay API
          Client.getCityImageFromPixabayAPI(apiKeys.keyPixabay, city).then(
            data => {
              pictures = Client.getPicturesByCity(data.hits, city);
              Client.renderResultsUI({ forecast, pictures, city, date });
            }
          );
        });
      });
    });
  }

  // Reset form
  document.getElementById("city").value = "";
  document.getElementById("schedule").value = "";
}

export { handleSubmit };
