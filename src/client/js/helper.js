// Function to get remain days
const getDays = date => {
  const currentDate = new Date();
  const travelDate = new Date(date);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((travelDate - currentDate) / oneDay));
  return diffDays;
};

// Function to get pictures with city's tag
const getPicturesByCity = (data, city) => {
  const pictures = data.reduce((acc, curr) => {
    if (curr.tags.includes(city.toLowerCase())) {
      if (curr.webformatWidth > curr.webformatHeight) {
        acc.push(curr);
      }
    }
    return acc;
  }, []);
  return pictures;
};

// Function to validate of input which empty
const validationEmptyInput = (city, date) => {
  if ((city === "" && date === "") || city === "" || date === "") {
    alert("Please provided a city name and a travel date");
    return true;
  } else {
    return false;
  }
};

// Function to reformate date to print in UI
const printDate = date => {
  const dataSplit = date.split("-");
  const year = dataSplit[0];
  const month = dataSplit[1];
  const day = dataSplit[2];

  return `${day}/${month}/${year}`;
};

export { getDays, getPicturesByCity, validationEmptyInput, printDate };
