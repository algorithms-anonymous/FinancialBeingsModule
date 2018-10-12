// @flow

import * as actions from "./actions";
import initialState from "./initialState";

type ActionT = {
  type: String,
  payload: any
};

export default (state: * = initialState(), action: ActionT) => {
  const { type, payload } = action;
  switch (type) {
    case actions.REGISTER_USER:
      return {
        ...state,
        errors: {},
        authentication: { inProgress: true }
      };
    case actions.REGISTER_USER_SUCCESS:
      return {
        ...initialState(),
        isAuthenticated: true
      };
    case actions.REGISTER_USER_FAIL:
      return {
        ...state,
        errors: payload,
        authentication: { inProgress: false }
      };
    case actions.VERIFY_USER:
      return {
        ...state,
        authentication: { inProgress: true }
      };
    case actions.VERIFY_USER_SUCCESS:
      return {
        ...state,
        authentication: { isConfirmed: true, inProgress: false }
      };
    case actions.VERIFY_USER_FAIL:
      return {
        ...state,
        authentication: { failed: true, inProgress: false }
      };
    case actions.LOGIN_USER:
      return {
        ...state,
        errors: {},
        authorization: { inProgress: true }
      };
    case actions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        inProgress: false,
        isAuthorized: true,
      };
    case actions.LOGIN_USER_FAIL:
      return {
        ...state,
        errors: payload,
        authorization: {
          ...state.authorization,
          inProgress: false
        }
      };
    case actions.RESET_PASSWORD:
    case actions.CHANGE_PASSWORD:
      return {
        ...state,
        errors: {},
        profile: { inProgress: true }
      };
    case actions.RESET_PASSWORD_FAIL:
    case actions.CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        errors: payload,
        profile: {
          ...state.profile,
          inProgress: false
        }
      };
    case actions.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        profile: { resetPasswordSuccess: true }
      };
    case actions.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        profile: { changePasswordSuccess: true }
      };
    case actions.SET_AUTH_TOKEN: {
      localStorage.setItem("authorization", payload);
      return {
        ...state,
      };
    }
    case actions.SET_RESET_TOKEN:
      localStorage.setItem("reset", payload);
      return state;
    case actions.CLEAR_AUTH_TOKEN:
      localStorage.clear();
      return initialState();
    default:
      return state;
  }
};
