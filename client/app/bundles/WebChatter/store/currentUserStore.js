import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from '../reducers';

export default (props, railsContext) => {
  const { email, fullName, isAuthenticated, token } = props;

  const { $$currentUserState } = initialStates;
  const initialState = {
    $$currentUserStore: $$currentUserState.merge({
      email: email,
      fullName: fullName,
      isAuthenticated: isAuthenticated,
      token: token
    }),
    railsContext,
  };

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return composedStore(createStore)(reducer, initialState);
};
