import axios from "axios";
import { message } from "antd";
import API_BASE_URL from "../../config";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/login`, reqObj);
    localStorage.setItem("user", JSON.stringify(response.data));
    message.success("Login success");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => (window.location.href = "/"), 500);
  } catch (error) {
    console.error(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post(`${API_BASE_URL}/api/users/register`, reqObj);
    message.success("Registration successful");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => (window.location.href = "/login"), 500);
  } catch (error) {
    console.error(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
