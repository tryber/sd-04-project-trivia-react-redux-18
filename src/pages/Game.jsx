import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  saveQuestions,
  updateQuestionIndex,
  updateAnswersBtns,
} from '../redux/actions';
import SessionHeader from '../components/SessionHeader';
import Questions from '../components/Questions';
import AnswerOptions from '../components/AnswerOptions';
import { getQuestions } from '../services/api';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    const { token, saveQuestions } = this.props;
    getQuestions(5, token).then((data) => saveQuestions(data.results));
  }

  handleRedirect() {
    const { questionIndex } = this.props;
    if (questionIndex === '5') return <Redirect to="/feedback" />;
  }

  render() {
    const { updateQuestionIndex, isDisabled, updateIsDisabled } = this.props;
    return (
      <div className="game-page-container">
        <SessionHeader />
        <div className="page-container">
          <div className="left-container">
            <Questions />
          </div>
          <div className="right-container">
            <AnswerOptions />
            {isDisabled && (
              <button
                data-testid="btn-next"
                onClick={() => {
                  updateQuestionIndex();
                  this.handleRedirect();
                  updateIsDisabled();
                }}
              >
                Próxima
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.userInfo.token,
  isDisabled: state.answers.isDisabled,
  questionIndex: state.questions.questionIndex,
});

const mapDispatchToProps = (dispatch) => ({
  saveQuestions: (questions) => dispatch(saveQuestions(questions)),
  updateQuestionIndex: () => dispatch(updateQuestionIndex()),
  updateIsDisabled: () => dispatch(updateAnswersBtns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
