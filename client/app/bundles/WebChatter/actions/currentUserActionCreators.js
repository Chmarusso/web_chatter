import { LOGIN, LOGOUT } from '../constants/currentUserConstants';

export const loginUser = (user) => ({
  type: LOGIN, user
});
