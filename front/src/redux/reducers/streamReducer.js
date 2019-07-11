import _ from "lodash";
import * as types from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_STREAM || types.CREATE_STREAM || types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_STREAM:
      //_.omit serve pra apagar o objeto dentro do primeiro 
      // parametro que tenha o nome igual ao segundo param
      return _.omit(state, action.payload);
    case types.GET_STREAMS:
      //_.mapKeys serve pra mudar o nome do objeto no primeiro
      // parametro para o item com nome do segundo param
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
