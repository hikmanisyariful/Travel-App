import { handleSubmit } from "./handleSubmit";

const app = () => {
  document.getElementById("search-btn").addEventListener("click", handleSubmit);

  document.getElementById("to-form").addEventListener("click", event => {
    event.preventDefault();
    Client.navigation("form");
  });
};

export { app };
