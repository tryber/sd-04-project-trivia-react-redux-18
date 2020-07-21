import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateIsDisabled } from '../redux/actions';
import Timing from '../components/Timing';

import './AnswerOptions.css';

import Timing from './Timing';
import './AnswerOptions.css';

class AnswerOptions extends Component {
  constructor(props) {
    super(props);

    this.createButton = this.createButton.bind(this);
  }

  createButton(answer, index) {
    const {
      questions,
      questionIndex,
      isDisabled,
      changeIsDisabled,
    } = this.props;
    return answer === questions[questionIndex].correct_answer ? (
      <button
        type="button"
        key={answer}
        data-testid="correct-answer"
        onClick={() => changeIsDisabled()}
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
        onClick={() => changeIsDisabled()}
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
});

const mapDispatchToProps = (dispatch) => ({
  changeIsDisabled: () => dispatch(updateIsDisabled()),
});

AnswerOptions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  questionIndex: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  changeIsDisabled: PropTypes.func.isRequired,
  possibleAnswers: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);
