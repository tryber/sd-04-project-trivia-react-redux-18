import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      updateIsDisabled,
    } = this.props;
    return answer === questions[questionIndex].correct_answer ? (
      <button
        type="button"
        key={answer}
        data-testid="correct-answer"
        onClick={() => updateIsDisabled()}
        disabled={isDisabled}
      >
        {answer}
      </button>
    ) : (
      <button
        type="button"
        key={answer}
        data-testid={`wrong-answer-${index}`}
        onClick={() => updateIsDisabled()}
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
  updateIsDisabled: () => dispatch(updateIsDisabled()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);
