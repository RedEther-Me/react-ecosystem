import axios from "axios";

export const login = (username, password) => {
  axios.post("http://localhost:8080/auth-public/login", {
    username,
    password
  });
};
