import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAnswers, updateAnswersBtns } from '../redux/actions';

class AnswerOptions extends Component {
  constructor(props) {
    super(props);

    this.currentQuestion = this.currentQuestion.bind(this);
    this.possibleAnswers = this.possibleAnswers.bind(this);
    this.checkCorrectAnswer = this.checkCorrectAnswer.bind(this);
  }

  componentDidUpdate() {
    const { questions, saveAnswers, answersOptions } = this.props;
    if (questions.length)
      if (!answersOptions.length)
        saveAnswers(this.possibleAnswers(this.currentQuestion()));
  }

  currentQuestion() {
    const { questions, questionIndex } = this.props;
    const currentQuestion = questions.filter(
      (question, index) => index === questionIndex,
    );
    return currentQuestion[0];
  }

  possibleAnswers(question) {
    return [...question.incorrect_answers, question.correct_answer].sort(
      () => Math.random() - 0.5,
    );
  }

  checkCorrectAnswer(answer, index) {
    const { isDisabled, updateAnswersBtns } = this.props;
    return answer === this.currentQuestion().correct_answer ? (
      <button
        type="button"
        key={answer}
        data-testid="correct-answer"
        onClick={() => updateAnswersBtns()}
        disabled={isDisabled}
      >
        {answer}
      </button>
    ) : (
      <button
        type="button"
        key={answer}
        data-testid={`wrong-answer-${index}`}
        onClick={() => updateAnswersBtns()}
        disabled={isDisabled}
      >
        {answer}
      </button>
    );
  }

  render() {
    console.log(this.currentQuestion());
    const { answersOptions } = this.props;
    return (
      <div>
        {answersOptions.map((answer, index) =>
          this.checkCorrectAnswer(answer, index),
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questions.questionIndex,
  questions: state.questions.questionsItems,
  answersOptions: state.answers.options,
  isDisabled: state.answers.isDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  saveAnswers: (answers) => dispatch(saveAnswers(answers)),
  updateAnswersBtns: () => dispatch(updateAnswersBtns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);
