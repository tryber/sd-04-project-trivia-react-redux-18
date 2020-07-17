export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const UPDATE_QUESTION_INDEX = 'UPDATE_QUESTION_INDEX';

export const saveUserInfo = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const saveToken = (payload) => ({
  type: SAVE_TOKEN,
  payload,
});

export const saveQuestions = (payload) => ({
  type: SAVE_QUESTIONS,
  payload,
});

export const updateQuestionIndex = () => ({
  type: UPDATE_QUESTION_INDEX,
});
