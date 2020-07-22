import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  updateIsDisabled,
  updateScore,
  updateAssertions,
} from '../redux/actions';
import Timing from '../components/Timing';

import './AnswerOptions.css';

class AnswerOptions extends Component {
  static saveLocalStorage(player) {
    localStorage.setItem('player', JSON.stringify(player));
  }

  constructor(props) {
    super(props);

    this.createButton = this.createButton.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  calculateScore() {
    const { timer, questions, questionIndex, changeScore, player } = this.props;

    const difficulty = questions[questionIndex].difficulty;

    console.log(questions[questionIndex].difficulty);

    if (difficulty === 'hard') {
      changeScore(10 + (timer * 3));
    }
    if (difficulty === 'medium') {
      changeScore(10 + (timer * 2));
    }
    if (difficulty === 'easy') {
      changeScore(10 + (timer * 1));
    }

    AnswerOptions.saveLocalStorage(player);
  }

  createButton(answer, index) {
    const {
      questions,
      questionIndex,
      isDisabled,
      changeIsDisabled,
      intervalId,
      player,
      changeAssertions,
    } = this.props;
    return answer === questions[questionIndex].correct_answer ? (
      <button
        type="button"
        key={answer}
        data-testid="correct-answer"
        onClick={() => {
          changeIsDisabled();
          clearInterval(intervalId);
          this.calculateScore();
          changeAssertions();
        }}
        disabled={isDisabled}
        className={isDisabled ? 'btn-answer correct-answer' : 'btn-answer'}
      >
        {answer}
      </button>
    ) : (
      <button
        type="button"
        key={answer}
        data-testid={`wrong-answer-${index}`}
        onClick={() => {
          changeIsDisabled();
          clearInterval(intervalId);
          AnswerOptions.saveLocalStorage(player);
        }}
        disabled={isDisabled}
        className={isDisabled ? 'btn-answer incorrect-answer' : 'btn-answer'}
      >
        {answer}
      </button>
    );
  }

  render() {
    const { questionIndex, possibleAnswers } = this.props;
    return !possibleAnswers.length ? (
      <h3>Loading...</h3>
    ) : (
      <div className="order-buttons">
        {possibleAnswers[questionIndex].map((item, index) =>
          this.createButton(item, index),
        )}
        <Timing />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questions.questionIndex,
  questions: state.questions.questionsItems,
  possibleAnswers: state.answers.options,
  isDisabled: state.answers.isDisabled,
  timer: state.time.time,
  intervalId: state.time.intervalId,
  score: state.userInfo.player.score,
  player: state.userInfo.player,
  name: state.userInfo.player.name,
  email: state.userInfo.player.gravatarEmail,
  assertions: state.userInfo.player.assertions,
});

const mapDispatchToProps = (dispatch) => ({
  changeIsDisabled: () => dispatch(updateIsDisabled()),
  changeScore: (payload) => dispatch(updateScore(payload)),
  changeAssertions: () => dispatch(updateAssertions()),
});

AnswerOptions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  questionIndex: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  changeIsDisabled: PropTypes.func.isRequired,
  possibleAnswers: PropTypes.arrayOf(PropTypes.array).isRequired,
  timer: PropTypes.number.isRequired,
  intervalId: PropTypes.number.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeAssertions: PropTypes.func.isRequired,
  player: PropTypes.shape({
    name: PropTypes.string,
    assertions: PropTypes.number,
    score: PropTypes.number,
    gravatarEmail: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);
