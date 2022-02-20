import { ERROR_USERS, FETCH_USERS, SUCCESS_USERS } from "../types/usersTypes";

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: null,
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ERROR_USERS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
