import currentUserReducer, { $$initialState as $$currentUserState } from './currentUserReducer';
import alertReducer, { $$initialState as $$alertState } from './alertReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$currentUserStore: currentUserReducer,
  $$alertStore: alertReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$currentUserState,
  $$alertState,
  railsContextState,
};
