import api from "../../api";
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

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await api.post("/streams", { ...formValues, userId });
  dispatch({ type: types.CREATE_STREAM, payload: response.data });
};

export const getStreams = () => async dispatch => {
  const response = await api.get("/streams");
  dispatch({ type: types.GET_STREAMS, payload: response.data });
};

export const getStream = id => async dispatch => {
  const response = await api.get(`/streams/${id}`);
  dispatch({ type: types.GET_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await api.put(`/streams/${id}`, formValues);
  dispatch({ type: types.EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await api.delete(`/streams/${id}`);
  dispatch({ type: types.DELETE_STREAM, payload: id });
};
