import { getQuestions } from '../../services/api';

export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';
export const UPDATE_QUESTION_INDEX = 'UPDATE_QUESTION_INDEX';
export const SAVE_POSSIBLE_ANSWERS = 'SAVE_POSSIBLE_ANSWERS';
export const UPDATE_IS_DISABLED = 'UPDATE_IS_DISABLED';

export const saveUserInfo = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const saveToken = (payload) => ({
  type: SAVE_TOKEN,
  payload,
});

export const fetchQuestionsRequest = () => ({
  type: FETCH_QUESTIONS_REQUEST,
});

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

export const fetchQuestionsFailure = (error) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: error,
});

export const updateQuestionIndex = () => ({
  type: UPDATE_QUESTION_INDEX,
});

export const savePossibleAnswers = (payload) => ({
  type: SAVE_POSSIBLE_ANSWERS,
  payload,
});

export const updateIsDisabled = () => ({
  type: UPDATE_IS_DISABLED,
});

export const fetchQuestions = () => (dispatch, getState) => {
  dispatch(fetchQuestionsRequest());
  getQuestions(5, getState().userInfo.token)
    .then((response) => {
      dispatch(fetchQuestionsSuccess(response.results));
      const answers = response.results.map((item) =>
        [...item.incorrect_answers, item.correct_answer].sort(
          () => Math.random() - 0.5,
        ),
      );
      dispatch(savePossibleAnswers(answers));
    })
    .catch((error) => dispatch(fetchQuestionsFailure(error)));
};
