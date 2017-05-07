import { LOGIN, LOGOUT } from '../constants/currentUserConstants';
import { RENDER, CLEAR } from '../constants/alertConstants';
import { renderAlert } from './alertActionCreators';

import Axios from 'axios';

export const loginUser = (user) => ({
  type: LOGIN, user
});

export const authenticateUser = (email, password) => {
  const apiUrl = '/api/v1/user_sessions';

  return (dispatch) => {
    return Axios.post(apiUrl, {user: {email: email, password: password}})
      .then(response => {
        dispatch(loginUser(response.data));
        dispatch(renderAlert('success', 'You are logged in.'));
      })
      .catch(error => {
        if (error.response.status == 404) {
          dispatch(renderAlert('error', 'User not found.'));
        }
      });
  };
};