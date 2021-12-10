const navigation = route => {
  console.log(route);
  const form = document.getElementById("form-input");
  const results = document.getElementById("results");

  if (route === "results") {
    form.style.display = "none";
    results.style.display = "flex";
  } else if (route === "form") {
    form.style.display = "flex";
    results.style.display = "none";
  }
};

export { navigation };
