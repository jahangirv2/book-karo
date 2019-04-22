import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS
} from './constants';
import firebase from '../../configs/firebase';
import * as services from './services';

export const login = (data) =>
  services.login(data);
  // dispatch => {
    // dispatch(loginInProgress());
    // return firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(resp => dispatch(loginSuccess(resp)))
    //   .catch(e => dispatch(loginFail(e.message)))
    // try {
    //   dispatch(loginInProgress());
    //   const resp = firebase.auth().signInWithEmailAndPassword(email, password);
    //   dispatch(loginSuccess(resp));
    //   return resp;
    // } catch(e) {
    //   dispatch(loginFail(e.message));
    //   throw new Error(e);
    // }
  // }

  // () => services.login({ email, password });

export const loginInProgress = data => ({
  type: LOGIN,
  data,
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data,
})

export const loginFail = data => ({
  type: LOGIN_FAIL,
  data,
})

export const signup = (data) =>
  services.signup(data);
  // dispatch => {
    // dispatch(loginInProgress());
    // return firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(resp => dispatch(loginSuccess(resp)))
    //   .catch(e => dispatch(loginFail(e.message)))
    // try {
    //   dispatch(loginInProgress());
    //   const resp = firebase.auth().signInWithEmailAndPassword(email, password);
    //   dispatch(loginSuccess(resp));
    //   return resp;
    // } catch(e) {
    //   dispatch(loginFail(e.message));
    //   throw new Error(e);
    // }
  // }

  // () => services.login({ email, password });

export const signupInProgress = data => ({
  type: SIGNUP,
  data,
});

export const signupSucess = data => ({
  type: SIGNUP_SUCCESS,
  data,
})

export const signupFail = data => ({
  type: SIGNUP_FAIL,
  data,
})
