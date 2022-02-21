import axios from "axios";
import {
  ERROR_PUBLICATION,
  FETCH_PUBLICATION,
  SUCCESS_PUBLICATION,
} from "../types/publicationTypes";

export const getAllPublications = () => async (dispatch: any) => {
  try {
    dispatch({ type: FETCH_PUBLICATION });
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: SUCCESS_PUBLICATION,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({ type: ERROR_PUBLICATION, payload: error.message });
  }
};

export const getAllPublicationsByUserId =
  ({ userId }: { userId: string }) =>
  async (dispatch: any) => {
    try {
      dispatch({ type: FETCH_PUBLICATION });
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=" + userId
      );
      dispatch({
        type: SUCCESS_PUBLICATION,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({ type: ERROR_PUBLICATION, payload: error.message });
    }
  };
