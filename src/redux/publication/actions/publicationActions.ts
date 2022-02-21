import axios from "axios";
import {
  ERROR_PUBLICATION,
  ERROR_PUBLICATION_BY_USER_ID,
  FETCH_PUBLICATION,
  FETCH_PUBLICATION_BY_USER_ID,
  SUCCESS_PUBLICATION,
  SUCCESS_PUBLICATION_BY_USER_ID,
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
  async (dispatch: any, state: any) => {
    try {
      dispatch({ type: FETCH_PUBLICATION_BY_USER_ID });
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      dispatch({
        type: SUCCESS_PUBLICATION_BY_USER_ID,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({ type: ERROR_PUBLICATION_BY_USER_ID, payload: error.message });
    }
  };
