import { LOGIN_SUCCESS } from "../actions";

const initialState = {
  user: {
    username: "",
    password: ""
  },
  loading: false,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.userData
      };
    default:
      return state;
  }
}

export default reducer;
