import { combineReducers } from 'redux';
import auth from './containers/Auth/reducer';
import home from './containers/Home/reducer';

const rootReducer = combineReducers({ auth , home});

export default rootReducer;