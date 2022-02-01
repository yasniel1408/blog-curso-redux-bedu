const INITIAL_STATE = {
  users: [],
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "USERS":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
