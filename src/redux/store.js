import { createStore, combineReducers } from 'redux';
import companyReducer from './reducers/companyReducer';

// Combine reducers
const rootReducer = combineReducers({
  companyData: companyReducer,  // Renaming to companyData for clarity
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
