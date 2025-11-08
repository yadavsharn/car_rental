import axios from "axios";
import { message } from "antd";
import API_BASE_URL from "../../config";

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post(`${API_BASE_URL}/api/bookings/bookcar`, reqObj);
    message.success("Your car booked successfully");
    setTimeout(() => (window.location.href = "/userbookings"), 500);
  } catch (error) {
    console.error(error);
    message.error("Something went wrong, please try again later");
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};

export const getAllBookings = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get(`${API_BASE_URL}/api/bookings/getallbookings`);
    dispatch({ type: "GET_ALL_BOOKINGS", payload: response.data });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
