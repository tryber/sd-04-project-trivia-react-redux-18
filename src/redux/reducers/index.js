import { combineReducers } from 'redux';
import userInfo from './userInfo';
import questions from './questions';
import answers from './answers';

const rootReducer = combineReducers({ userInfo, questions, answers });

export default rootReducer;
