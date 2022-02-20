import axios from 'axios';
import { ERROR_USERS, FETCH_USERS, SUCCESS_USERS } from '../types/usersTypes';

export const getAll = () => async (dispatch: any) => {
    try {
        dispatch({ type: FETCH_USERS });
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: SUCCESS_USERS,
            payload: res.data,
        });
    } catch (error: any) {
        dispatch({ type: ERROR_USERS, payload: error.message });
    }
};
