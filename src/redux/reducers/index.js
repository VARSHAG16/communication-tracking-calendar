import { combineReducers } from 'redux';
import companyReducer from './companyReducer';

const rootReducer = combineReducers({
  companyReducer, // This maps to state.companyReducer
});

export default rootReducer;
