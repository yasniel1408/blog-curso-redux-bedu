import axios from "axios";

export const getAll = () => async (dispatch: any) => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: "USERS",
    payload: res.data,
  });
};
