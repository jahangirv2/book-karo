import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAIL
} from './constants';
import * as services from './services';

export const login = ({ email, password }) =>
  services.login({ email, password });


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
