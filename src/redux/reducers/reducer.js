import * as actions from '../actions';

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
  questions: {
    questionIndex: 0,
    questionsItems: [],
  },
};

const reducer = (state = INITIAL_STATE, action) => {
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
    case actions.SAVE_QUESTIONS:
      return {
        ...state,
        questions: {
          ...state.questions,
          questionsItems: action.payload,
        },
      };
    case actions.UPDATE_QUESTION_INDEX:
      return {
        ...state,
        questions: {
          ...state.questions,
          questionIndex: state.questions.questionIndex + 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
