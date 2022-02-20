import { combineReducers } from "redux";
import userReducer from "./user/reducers/userReducer";
import publicationReducer from "./publication/reducers/publicationReducer";

export default combineReducers({
  userReducer,
  publicationReducer,
});
