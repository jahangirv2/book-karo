import { fetchSucess, fetchFail, fetchInProgress,} from './actions';
// import { fet } from './actions';
// import { loginSuccess } from '../Auth/actions';
// export const login = async ({ email, password }) => dispatch => {
//   try {
//     dispatch(loginInProgress());
//     const resp = firebase.auth().signInWithEmailAndPassword(email, password);
//     dispatch(loginSuccess(resp));
//   } catch(e) {
//     dispatch(loginFail(e.message));
//   }
// }
export const fetchHotels = () => dispatch => {
  dispatch(fetchInProgress());
  return  fetch("https://my-json-server.typicode.com/jahangirv2/book-karo/hotels").then(res => res.json()).then(res => dispatch(fetchSucess(res)));
   
}
