import axios from 'axios';
import history from '../history';
const URL = 'http://localhost:1337';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const USER_ERROR = 'USER_ERROR';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const userError = (message) => ({ type: USER_ERROR, message });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  try {
    const res = await axios.get(URL + '/auth/me');
    dispatch(getUser(res.data || defaultUser));
  } catch (error) {
    dispatch(userError(error.response.data));
    console.error(error);
  }
};

export const auth = (method, email, password, name) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`${URL}/auth/${method}`, { email, name, password });
    dispatch(getUser(res.data));
    history.push('/');
  } catch (error) {
    dispatch(userError(error.response.data));
    console.error(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post(URL + '/auth/logout');
    dispatch(removeUser());
    history.push('/');
  } catch (error) {
    console.error(error);
  }
};

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case USER_ERROR:
      return { ...state, errorMsg: action.message };
    default:
      return state;
  }
}
