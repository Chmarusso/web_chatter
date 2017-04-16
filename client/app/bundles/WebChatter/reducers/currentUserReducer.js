import Immutable from 'immutable';

import * as actionTypes from '../constants/currentUserConstants';

export const $$initialState = Immutable.fromJS({
  email: null,
  fullName: null,
  isAuthenticated: false,
  token: null
});

export default function currentUserReducer($$state = $$initialState, action = null) {
  const { type, user, error } = action;

  switch (type) {

    case actionTypes.LOGIN: {
      return $$state.merge({
        email: user.email,
        fullName: user.full_name,
        isAuthenticated: true,
        token: user.token
      });
    }

    case actionTypes.LOGOUT: {
      return $$state.merge({
        email: null,
        fullName: null,
        isAuthenticated: false,
        token: null
      });
    }

    default: {
      return $$state;
    }
  }
}
