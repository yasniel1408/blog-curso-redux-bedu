import {
  FETCH_PUBLICATION,
  SUCCESS_PUBLICATION,
  ERROR_PUBLICATION,
  FETCH_PUBLICATION_BY_USER_ID,
  SUCCESS_PUBLICATION_BY_USER_ID,
  ERROR_PUBLICATION_BY_USER_ID,
} from "./../types/publicationTypes";

const INITIAL_STATE = {
  loading: false,
  publications: [],
  publicationsByUserId: [],
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
    case FETCH_PUBLICATION_BY_USER_ID:
      return {
        ...state,
        loading: true,
        publicationsByUserId: [],
        error: null,
      };
    case SUCCESS_PUBLICATION_BY_USER_ID:
      return {
        ...state,
        loading: false,
        publicationsByUserId: action.payload,
      };
    case ERROR_PUBLICATION_BY_USER_ID:
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
