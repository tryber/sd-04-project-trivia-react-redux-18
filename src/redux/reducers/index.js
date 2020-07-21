import { combineReducers } from 'redux';
import userInfo from './userInfo';
import questions from './questions';
import answers from './answers';
import time from './time';

const rootReducer = combineReducers({ userInfo, questions, answers, time });

export default rootReducer;
