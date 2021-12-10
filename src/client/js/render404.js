const render404 = () => {
  Client.navigation("results");
  const results = document.getElementById("results");
  results.innerHTML = `
  <div class="card">
    <div class="picture">
      <div class="img-wrap">
        <img
          src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg"
        />
      </div>
    </div>
    <div class="info">
      <h1>Your search is not found</h1>
      <h3>Please try again</h3>
    </div>
  </div>
  `;
};

export { render404 };
