import {
    FETCH, FETCH_SUCCESS, FETCH_FAIL
  } from './constants';
  import firebase from '../../configs/firebase';
  import * as services from './services';
  
  export const fetchHotels = () =>
    services.fetchHotels();
  
  export const fetchInProgress = data => ({
    type: FETCH,
    data,
  });
  
  export const fetchSucess = data => ({
    type: FETCH_SUCCESS,
    data,
  })
  
  export const fetchFail = data => ({
    type: FETCH_FAIL,
    data,
  })
  