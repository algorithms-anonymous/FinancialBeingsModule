// @flow

import { all, takeLatest, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  loginUser,
  loginUserSuccess,
  loginUserFail,
  registerUser,
  registerUserSuccess,
  registerUserFail,
  verifyUser,
  resetPassword,
  changePassword,
  changePasswordSuccess,
  changePasswordFail,
  verifyUserSuccess,
  verifyUserFail,
  resetPasswordSuccess,
  resetPasswordFail,
  setPasswordResetToken,
  fetchPasswordResetToken,
  clearAuthToken,
  logoutUser
} from "./actions";

import {
  LOGIN,
  CHANGE_PASSWORD
} from "../../constants/routes";


export function* loginUser$({ payload }: any): Generator<*, *, *> {
  try {
    yield put(loginUserSuccess(payload));
  } catch (error) {
    yield put(loginUserFail(error));
  }
}

export function* registerUser$({ payload }: any): Generator<*, *, *> {
  try {
    yield put(registerUserSuccess(payload));
  } catch (error) {
    yield put(registerUserFail(error));
  }
}

export function* resetPassword$({ payload }: any): Generator<*, *, *> {
  try {
    yield put(resetPasswordSuccess(payload));
  } catch (error) {
    yield put(resetPasswordFail(error));
  }
}

export function* changePassword$({ payload }: any): Generator<*, *, *> {
  try {
    yield put(changePasswordSuccess(payload));
  } catch (error) {
    yield put(changePasswordFail(error));
  }
}

export function* verifyUser$({ payload }: any): Generator<*, *, *> {
  try {
    yield put(verifyUserSuccess(payload));
  } catch (error) {
    yield put(verifyUserFail(error));
  }
}

export function* setPasswordResetToken$({ payload }: any): Generator<*, *, *> {
  yield put(setPasswordResetToken(payload.reset));
  yield put(push(CHANGE_PASSWORD));
}

export function* logoutUser$(): Generator<*, *, *> {
  yield put(clearAuthToken());
  yield put(push(LOGIN));
}

export default function*(): Generator<*, *, *> {
  yield all([
    takeLatest(loginUser, loginUser$),
    takeLatest(registerUser, registerUser$),
    takeLatest(verifyUser, verifyUser$),
    takeLatest(resetPassword, resetPassword$),
    takeLatest(changePassword, changePassword$),
    takeLatest(fetchPasswordResetToken, setPasswordResetToken$),
    takeLatest(logoutUser, logoutUser$),
  ]);
}
