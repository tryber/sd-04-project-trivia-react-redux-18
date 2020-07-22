import * as actions from '../actions';

const INITIAL_STATE = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  token: '',
};

const userInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SAVE_USER_INFO:
      return {
        ...state,
        player: {
          ...state.player,
          name: action.payload.player.name,
          gravatarEmail: action.payload.player.gravatarEmail,
        },
      };
    case actions.SAVE_TOKEN:
      return { ...state, token: action.payload };
    case actions.UPDATE_SCORE:
      return {
        ...state,
        player: {
          ...state.player,
          score: state.player.score + action.payload,
        },
      };
    case actions.UPDATE_ASSERTIONS:
      return {
        ...state,
<<<<<<< HEAD
        player: {...state.player, assertions: state.player.assertions + 1 },
=======
        player: {
          ...state.player,
          assertions: state.player.assertions + 1,
        },
>>>>>>> 7b42c58e90a79a61da41c9a2b9a217f543eabf48
      };
    default:
      return state;
  };
};

export default userInfo;
