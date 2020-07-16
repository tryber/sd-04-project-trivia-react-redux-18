import { SAVE_USER_INFO } from '../actions';

const INITIAL_STATE = {
  player: {
    name: '',
    assertions: '',
    score: '',
    gravatarEmail: '',
  },
  token: '',
  ranking: {
    name: '',
    score: '',
    picture: '',
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        player: {
          ...state.player,
          name: action.payload.player.name,
          gravatarEmail: action.payload.player.gravatarEmail,
        },
      };
    default:
      return state;
  }
};

export default reducer;
