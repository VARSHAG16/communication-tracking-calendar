export const ADD_COMMUNICATION = 'ADD_COMMUNICATION';
export const REMOVE_COMMUNICATION = 'REMOVE_COMMUNICATION';

export const addCommunication = (communication) => ({
  type: ADD_COMMUNICATION,
  payload: communication,
});

export const removeCommunication = (communicationId) => ({
  type: REMOVE_COMMUNICATION,
  payload: communicationId,
});
