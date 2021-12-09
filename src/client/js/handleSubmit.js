function handleSubmit(event) {
  event.preventDefault();

  let city = document.getElementById("city").value;
  let date = document.getElementById("schedule").value;
  let forecast;
  let pictures;

  Client.getApiKey().then(apiKeys => {
    Client.getLatLongFromGeonamesAPI(apiKeys.keyGeonames, city).then(data => {
      const payload = {
        lat: data.geonames[0].lat,
        lng: data.geonames[0].lng,
        days: Client.getDays(date)
      };
      Client.getPredictForecastFromWeatherbitAPI(
        apiKeys.keyWeatherbit,
        payload
      ).then(({ data }) => {
        forecast = data[data.length - 1];
        Client.getCityImageFromPixabayAPI(apiKeys.keyPixabay, city).then(
          data => {
            pictures = Client.getPicturesByCity(data.hits, city);
            // console.log("forecast :", forecast, "||||", "Image :", imageData);
            Client.renderResultsUI({ forecast, pictures, city, date });
          }
        );
      });
    });
  });

  document.getElementById("city").value = "";
  document.getElementById("schedule").value = "";
}

export { handleSubmit };
