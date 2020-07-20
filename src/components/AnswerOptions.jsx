import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateIsDisabled } from '../redux/actions';

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
      <div>
        {possibleAnswers[questionIndex].map((item, index) =>
          this.createButton(item, index),
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questions.questionIndex,
  questions: state.questions.questionsItems,
  possibleAnswers: state.answers.options,
  isDisabled: state.answers.isDisabled,
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
