import { ADD_COMMUNICATION, REMOVE_COMMUNICATION } from "../actions/communicationActions";

const initialState = {
  communications: [],
};

const communicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMUNICATION:
      return {
        ...state,
        communications: [...state.communications, action.payload],
      };
    case REMOVE_COMMUNICATION:
      return {
        ...state,
        communications: state.communications.filter(
          (communication) => communication.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default communicationReducer;
