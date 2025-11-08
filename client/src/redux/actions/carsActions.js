import axios from "axios";
import { message } from "antd";
import API_BASE_URL from "../../config";

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get(`${API_BASE_URL}/api/cars/getallcars`);
    dispatch({ type: "GET_ALL_CARS", payload: response.data });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post(`${API_BASE_URL}/api/cars/addcar`, reqObj);
    message.success("New car added successfully");
    setTimeout(() => (window.location.href = "/admin"), 500);
  } catch (error) {
    console.error(error);
    message.error("Something went wrong");
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post(`${API_BASE_URL}/api/cars/editcar`, reqObj);
    message.success("Car details updated successfully");
    setTimeout(() => (window.location.href = "/admin"), 500);
  } catch (error) {
    console.error(error);
    message.error("Something went wrong");
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post(`${API_BASE_URL}/api/cars/deletecar`, reqObj);
    message.success("Car deleted successfully");
    setTimeout(() => window.location.reload(), 500);
  } catch (error) {
    console.error(error);
    message.error("Something went wrong");
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
