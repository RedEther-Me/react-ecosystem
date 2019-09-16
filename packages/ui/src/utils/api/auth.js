import axios from "axios";

export const login = (username, password) => {
  axios.post("http://localhost:5000/api/auth/public/login", {
    username,
    password
  });
};
