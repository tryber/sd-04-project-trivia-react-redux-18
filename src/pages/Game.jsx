import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import {
  updateQuestionIndex,
  fetchQuestions,
  updateIsDisabled,
} from '../redux/actions';
import SessionHeader from '../components/SessionHeader';
import Questions from '../components/Questions';
import AnswerOptions from '../components/AnswerOptions';
import './Game.css';

class Game extends Component {
  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  }

  render() {
    const {
      updateQuestionIndex,
      isDisabled,
      updateIsDisabled,
      questionIndex,
    } = this.props;
    if (questionIndex === 5) {
      return <Redirect to={Home} />;
    }
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
  isDisabled: state.answers.isDisabled,
  questionIndex: state.questions.questionIndex,
});

const mapDispatchToProps = (dispatch) => ({
  updateQuestionIndex: () => dispatch(updateQuestionIndex()),
  fetchQuestions: () => dispatch(fetchQuestions()),
  updateIsDisabled: () => dispatch(updateIsDisabled()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
