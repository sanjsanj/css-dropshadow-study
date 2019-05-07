import * as types from "../constants";

export const appReducerInitialState = { loadPage: false };

const loadPage = (state, action) => ({ ...state, loadPage: true });

export const appReducer = (state = appReducerInitialState, action) => {
  switch (action.type) {
    case types.LOAD_PAGE:
      return loadPage(state, action);

    default:
      return state;
  }
};
