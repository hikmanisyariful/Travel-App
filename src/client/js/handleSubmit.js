function handleSubmit(event) {
  event.preventDefault();

  let city = document.getElementById("city").value;
  let date = document.getElementById("schedule").value;
  let forecast;
  let imageData;

  Client.getApiKey().then(apiKeys => {
    Client.getLatLongFromGeonamesAPI(apiKeys.keyGeonames, city).then(data => {
      const payload = {
        lat: data.geonames[0].lat,
        lng: data.geonames[0].lng,
        days: 3
      };
      Client.getPredictForecastFromWeatherbitAPI(
        apiKeys.keyWeatherbit,
        payload
      ).then(({ data }) => {
        forecast = data[data.length - 1];
        Client.getCityImageFromPixabayAPI(apiKeys.keyPixabay, city).then(
          data => {
            imageData = data;
            console.log("forecast :", forecast, "||||", "Image :", imageData);
          }
        );
      });
    });
  });

  const results = document.getElementById("results");
  results.innerHTML = `
    <p>${city}</p>
    <p>${date}</p>
  `;

  document.getElementById("city").value = "";
  document.getElementById("schedule").value = "";
}

export { handleSubmit };
