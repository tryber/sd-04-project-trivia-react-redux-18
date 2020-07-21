import * as actions from '../actions';

const INITIAL_STATE = {
  player: {
    name: '',
    assertions: '',
    score: '',
    gravatarEmail: '',
  },
  token: '',
  ranking: [],
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
      return {
        ...state,
        token: action.payload,
      };
    case actions.SAVE_RANKING:
      return {
        ...state,
        ranking: [...state.ranking, action.payload], // Rever
      };
    default:
      return state;
  }
};

export default userInfo;
