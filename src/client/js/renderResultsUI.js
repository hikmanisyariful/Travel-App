const renderResultsUI = data => {
  Client.navigation("results");
  const { forecast, pictures, city, date } = data;
  console.log(forecast, pictures, city, date);
  const results = document.getElementById("results");
  results.innerHTML = `
  <div class="card">
    <div class="picture">
      <div class="img-wrap">
        <img
          src="${pictures[pictures.length - 1].webformatURL}"
        />
      </div>
    </div>
    <div class="info">
      <h1>My trip to : ${city.toUpperCase()}</h1>
      <h3>Departing: ${date}</h3>
      <p>Typical weather for then is:</p>
      <h4>High temperature: ${forecast.max_temp} °C</h4>
      <h4>Low temperature: ${forecast.low_temp} °C</h4>
      <h4>Weather: ${forecast.weather.description}</h4>
    </div>
  </div>
  `;
};

export { renderResultsUI };
