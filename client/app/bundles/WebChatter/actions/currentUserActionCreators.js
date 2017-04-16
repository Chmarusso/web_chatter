import { LOGIN, LOGOUT } from '../constants/currentUserConstants';
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
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };
};