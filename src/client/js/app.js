import { handleSubmit } from "./handleSubmit";

const app = () => {
  // Event listener to search the result from 3 API
  document.getElementById("search-btn").addEventListener("click", handleSubmit);

  // Event listener to back to form
  document.getElementById("to-form").addEventListener("click", event => {
    event.preventDefault();
    Client.navigation("form");
  });
};

export { app };
