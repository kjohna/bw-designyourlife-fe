export const LOGIN_STARTING = "LOGIN_STARTING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function login(dispatch) {
  dispatch({
    type: LOGIN_STARTING
  });
  // axios stuff here
  let userData = {
    username: "user",
    password: "pass"
  };
  return {
    type: LOGIN_SUCCESS,
    payload: userData
  };
}
