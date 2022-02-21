import { SearchAction, SearchState } from '../interfaces';

export const searchReducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case '[dropdown select] selected':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
