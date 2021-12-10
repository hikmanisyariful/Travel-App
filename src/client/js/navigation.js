const navigation = route => {
  const form = document.getElementById("form-input");
  const results = document.getElementById("results");
  const toForm = document.getElementById("to-form");

  // Conditional to show and hide element
  if (route === "results") {
    form.style.display = "none";
    results.style.display = "flex";
    toForm.style.display = "block";
  } else if (route === "form") {
    form.style.display = "flex";
    results.style.display = "none";
    toForm.style.display = "none";
  }
};

export { navigation };
