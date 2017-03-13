import currentUserReducer, { $$initialState as $$currentUserState } from './currentUserReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$currentUserStore: currentUserReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$currentUserState,
  railsContextState,
};
