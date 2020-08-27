import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      // this will be the token that we send
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      window.scrollTo(0, 0);
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
