import axios from "axios";

const API_URL = (import.meta.env.VITE_API_URL ||"http://localhost:8080/api") + "/auth/";

const login = (username, password) => {
  return axios
    .post(API_URL + "login",
      {
        username,
        password    },
      {
        headers: {
          "Content-Type": "application/json",
          "withCredentials": "true",
          "Content-Type": "application/json"
        },
      }
    )
    .then(response => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data.username;
    })

}

const logout = () => {
  localStorage.removeItem("user")
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
  login,
  logout,
  getCurrentUser
}

export default AuthService