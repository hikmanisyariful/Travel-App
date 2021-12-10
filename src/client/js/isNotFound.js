const isNotFoundLatLng = data => {
  if (data.geonames.length === 0) {
    return true;
  }
  return false;
};

const isNotFoundPicture = data => {
  if (data.hits.length === 0) {
    return true;
  }

  return false;
};

export { isNotFoundLatLng, isNotFoundPicture };
