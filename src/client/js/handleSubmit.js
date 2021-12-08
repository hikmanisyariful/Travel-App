function handleSubmit(event) {
  event.preventDefault();

  let city = document.getElementById("city").value;
  let date = document.getElementById("schedule").value;

  Client.getApiKey().then(data => {
    console.log(data);
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
