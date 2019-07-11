import api from "../../api";
import history from "../../history";
import * as types from "../types";

export const signIn = userId => {
  return {
    type: types.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT
  };
};

export const toggleModal = setModal => {
  return {
    type: types.TOGGLE_MODAL,
    payload: setModal
  }
}

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await api.post("/streams", { ...formValues, userId });
  dispatch({ type: types.CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const getStreams = () => async dispatch => {
  const response = await api.get("/streams");
  dispatch({ type: types.GET_STREAMS, payload: response.data });
};

export const getStream = id => async dispatch => {
  const response = await api.get(`/streams/${id}`);
  dispatch({ type: types.GET_STREAM, payload: response.data });
};

//put => pega formValues(title, description, id) e transforma num novo objeto sem userID
//patch => override dos valores de formValues no back, sem perder userId

export const editStream = (id, formValues) => async dispatch => {
  const response = await api.patch(`/streams/${id}`, formValues);
  dispatch({ type: types.EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await api.delete(`/streams/${id}`);
  dispatch({ type: types.DELETE_STREAM, payload: id });
};

