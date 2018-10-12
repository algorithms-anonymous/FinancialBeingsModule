// @flow

import { createAction } from 'redux-actions';

// Register
export const REGISTER_USER = '[AUTH] Register user';
export const registerUser = createAction(REGISTER_USER);

export const REGISTER_USER_SUCCESS = `${REGISTER_USER} success`;
export const registerUserSuccess = createAction(REGISTER_USER_SUCCESS);

export const REGISTER_USER_FAIL = `${REGISTER_USER} fail`;
export const registerUserFail = createAction(REGISTER_USER_FAIL);

// Verify
export const VERIFY_USER = '[AUTH] Verify user Request';
export const verifyUser = createAction(VERIFY_USER);

export const VERIFY_USER_SUCCESS = `${VERIFY_USER} success`;
export const verifyUserSuccess = createAction(VERIFY_USER_SUCCESS);

export const VERIFY_USER_FAIL = `${VERIFY_USER} fail`;
export const verifyUserFail = createAction(VERIFY_USER_FAIL);

// Login
export const LOGIN_USER = '[AUTH] Login user';
export const loginUser = createAction(LOGIN_USER);

export const LOGIN_USER_SUCCESS = `${LOGIN_USER} success`;
export const loginUserSuccess = createAction(LOGIN_USER_SUCCESS);

export const LOGIN_USER_FAIL = `${LOGIN_USER} fail`;
export const loginUserFail = createAction(LOGIN_USER_FAIL);

// Reset token
export const FETCH_RESET_TOKEN = '[AUTH] Fetch reset token';
export const fetchPasswordResetToken = createAction(FETCH_RESET_TOKEN);

export const SET_RESET_TOKEN = '[AUTH] Set reset token';
export const setPasswordResetToken = createAction(SET_RESET_TOKEN);

// Reset PW
export const RESET_PASSWORD = '[AUTH] Reset password';
export const resetPassword = createAction(RESET_PASSWORD);

export const RESET_PASSWORD_SUCCESS = `${RESET_PASSWORD} success`;
export const resetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS);

export const RESET_PASSWORD_FAIL = `${RESET_PASSWORD} fail`;
export const resetPasswordFail = createAction(RESET_PASSWORD_FAIL);


// Change PW
export const CHANGE_PASSWORD = '[AUTH] Change password';
export const changePassword = createAction(CHANGE_PASSWORD);

export const CHANGE_PASSWORD_SUCCESS = `${CHANGE_PASSWORD} success`;
export const changePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS);

export const CHANGE_PASSWORD_FAIL = `${CHANGE_PASSWORD} fail`;
export const changePasswordFail = createAction(CHANGE_PASSWORD_FAIL);


// Session management
export const SET_AUTH_TOKEN = `[AUTH] Set token`;
export const setAuthToken = createAction(SET_AUTH_TOKEN);

export const CLEAR_AUTH_TOKEN = `[AUTH] Clear token`;
export const clearAuthToken = createAction(CLEAR_AUTH_TOKEN);

export const LOGOUT_USER = `[AUTH] Logout user`;
export const logoutUser = createAction(LOGOUT_USER);
