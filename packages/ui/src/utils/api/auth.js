import axios from "axios";
import Cookies from "js-cookie";

export const login = async (username, password) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/auth-public/login",
      {
        username,
        password
      }
    );
    const { token } = data;

    Cookies.set("token", token);
  } catch (err) {
    return;
  }
};
