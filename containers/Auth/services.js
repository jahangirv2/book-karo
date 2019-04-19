import firebase from '../../configs/firebase';
import { loginSuccess, loginFail, loginInProgress } from './actions';

export const login = async ({ email, password }) => dispatch => {
  try {
    dispatch(loginInProgress());
    const resp = firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(loginSuccess(resp));
  } catch(e) {
    dispatch(loginFail(e.message));
  }
}