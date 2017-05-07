import Immutable from 'immutable';

import * as actionTypes from '../constants/alertConstants';

export const $$initialState = Immutable.fromJS({
  alertType: null,
  message: null
});

export default function alertReducer($$state = $$initialState, action = null) {
  const { type, message, alertType, error } = action;

  switch (type) {

    case actionTypes.RENDER: {
      return $$state.merge({
        alertType: alertType, 
        message: message
      });
    }

    case actionTypes.CLEAR: {
      return $$state.merge({
        alertType: null,
        message: null
      });
    }

    default: {
      return $$state;
    }
  }
}
