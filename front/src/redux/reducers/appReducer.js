import * as types from "../types";

const INIT_STATE = {
  modal: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};
