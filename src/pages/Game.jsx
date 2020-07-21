import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  updateQuestionIndex,
  fetchQuestions,
  updateIsDisabled,
  updateTimer,
  saveIntervalId,
  resetTimer
} from '../redux/actions';
import SessionHeader from '../components/SessionHeader';
import Questions from '../components/Questions';
import AnswerOptions from '../components/AnswerOptions';
import './Game.css';

// localStorage.setItem('player', JSON.stringify({name, assertions, score, gravatarEmail}))

class Game extends Component {
  constructor(props) {
    super(props);
    this.renderNextButton = this.renderNextButton.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
  }

  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  handleTimer() {
    const { newTimer, changeTimer, changeIntervalId } = this.props;
    this.intervalID = setInterval(() => changeTimer(), 1000)
    changeIntervalId(this.intervalID);
    newTimer();
  }

  renderNextButton() {
    const { changeQuestionIndex, isDisabled, changeIsDisabled } = this.props;
    return (
      isDisabled && (
        <button
          data-testid="btn-next"
          onClick={() => {
            changeQuestionIndex();
            changeIsDisabled();
            this.handleTimer();
          }}
          className="btn-next"
        >
          Próxima
        </button>
      )
    );
  }

  render() {
    const { questionIndex } = this.props;
    if (questionIndex === 5) {
      return <Redirect to="/feedback" />;
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
            {this.renderNextButton()}
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
  changeQuestionIndex: () => dispatch(updateQuestionIndex()),
  getQuestions: () => dispatch(fetchQuestions()),
  changeIsDisabled: () => dispatch(updateIsDisabled()),
  changeTimer: () => dispatch(updateTimer()),
  changeIntervalId: (intervalId) => dispatch(saveIntervalId(intervalId)),
  newTimer: () => dispatch(resetTimer()),
});

Game.propTypes = {
  changeQuestionIndex: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  changeIsDisabled: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  getQuestions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
