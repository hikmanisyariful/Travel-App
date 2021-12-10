const getDays = date => {
  const currentDate = new Date();
  const travelDate = new Date(date);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((travelDate - currentDate) / oneDay));
  return diffDays;
};

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

export { getDays, getPicturesByCity };