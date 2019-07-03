import axios from "../../axios-instance";

export const LOGIN_STARTING = "LOGIN_STARTING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = userData => dispatch => {
  // takes username, pw and makes call to BE to verify user

  dispatch({
    type: LOGIN_STARTING
  });

  axios
    .post("/api/auth/login", userData)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  return {
    type: LOGIN_SUCCESS,
    payload: userData
  };
};
