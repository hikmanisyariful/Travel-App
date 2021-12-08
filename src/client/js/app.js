const getApiKey = async () => {
  const response = await fetch("http://localhost:8081/apiKey");
  const json = await response.json();
  console.log("THIS IS API KEY", json);
  return json;
};

export { getApiKey };
