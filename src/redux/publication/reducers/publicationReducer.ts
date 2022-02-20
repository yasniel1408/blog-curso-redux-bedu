import {
  ERROR_PUBLICATION,
  FETCH_PUBLICATION,
  SUCCESS_PUBLICATION,
} from "../types/publicationTypes";

const INITIAL_STATE = {
  loading: false,
  publications: [],
  error: null,
};

const publicationReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_PUBLICATION:
      return {
        ...state,
        loading: true,
        publications: [],
        error: null,
      };
    case SUCCESS_PUBLICATION:
      return {
        ...state,
        loading: false,
        publications: action.payload,
      };
    case ERROR_PUBLICATION:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default publicationReducer;
