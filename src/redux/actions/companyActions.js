export const ADD_COMPANY = 'ADD_COMPANY';
export const REMOVE_COMPANY = 'REMOVE_COMPANY';

export const addCompany = (company) => ({
  type: ADD_COMPANY,
  payload: company,
});

export const removeCompany = (companyId) => ({
  type: REMOVE_COMPANY,
  payload: companyId,
});

// redux/actions/companyActions.js

export const editCompany = (updatedCompany) => {
  return {
    type: 'EDIT_COMPANY',
    payload: updatedCompany,
  };
};

// actions/companyActions.js

export const updateCompany = (updatedCompany) => ({
  type: 'UPDATE_COMPANY',
  payload: updatedCompany,
});

