import _ from "lodash";
import * as types from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_STREAM | types.CREATE_STREAM | types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_STREAM:
      return _.omit(state, action.payload);
    case types.GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
