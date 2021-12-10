import { handleSubmit } from "./handleSubmit";

const app = () => {
  document.getElementById("search-btn").addEventListener("click", handleSubmit);
};

export { app };
