const getDays = date => {
  const currentDate = new Date();
  const travelDate = new Date(date);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((travelDate - currentDate) / oneDay));
  return diffDays;
};

const getPicturesByCity = (data, city) => {
  const pictures = data.reduce((acc, curr) => {
    curr.tags.includes(city.toLowerCase()) && acc.push(curr.webformatURL);
    return acc;
  }, []);
  return pictures;
};

export { getDays, getPicturesByCity };
