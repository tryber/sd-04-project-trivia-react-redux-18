import * as actions from '../actions';

const INITIAL_STATE = {
  time: 5,
};

const updateTimer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.UPDATE_TIMER:
      return {
        ...state,
        time: state.time - 1,
      };
    case actions.STOP_TIMER:
      return {
        ...state,
        time: 0,
      };
    default:
      return state;
  }
};

export default updateTimer;
