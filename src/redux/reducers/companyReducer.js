// src/redux/reducers/companyReducer.js
import { ADD_COMPANY, REMOVE_COMPANY } from '../actionTypes';

const initialState = {
  companies: [], // Ensure the companies state is an array by default
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case REMOVE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default companyReducer;
