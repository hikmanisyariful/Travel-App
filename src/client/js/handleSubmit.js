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
        if (Client.isNotFoundLatLng(data)) {
          Client.render404();
        } else {
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
                if (Client.isNotFoundPicture(data)) {
                  Client.render404();
                } else {
                  pictures = Client.getPicturesByCity(data.hits, city);
                  if (pictures.length === 0) {
                    Client.render404();
                  } else {
                    Client.renderResultsUI({ forecast, pictures, city, date });
                  }
                }
              }
            );
          });
        }
      });
    });
  }

  // Reset form
  document.getElementById("city").value = "";
  document.getElementById("schedule").value = "";
}

export { handleSubmit };
