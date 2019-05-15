import { fetchSucess, fetchFail, fetchInProgress,} from './actions';
// export const login = async ({ email, password }) => dispatch => {
//   try {
//     dispatch(loginInProgress());
//     const resp = firebase.auth().signInWithEmailAndPassword(email, password);
//     dispatch(loginSuccess(resp));
//   } catch(e) {
//     dispatch(loginFail(e.message));
//   }
// }
export const fetchHotels = (data) => dispatch => {
  dispatch(fetchInProgress());
  return fetch("https://my-json-server.typicode.com/jahangirv2/book-karo/hotels").then(res => res.json()).then(dispatch(fetchSucess(res)))
  .catch(e => dispatch(loginFail(e.message)))
}
