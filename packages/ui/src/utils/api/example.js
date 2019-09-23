import axios from "axios";
import Cookies from "js-cookie";

export const protectedApi = async () => {
  try {
    const value = Cookies.get("token");
    console.log(value);

    return axios.get("http://localhost:8080/example/protected", {
      headers: { authorization: `Bearer ${value}` }
    });
  } catch (err) {
    console.log(err);
  }
};
