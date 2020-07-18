import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAnswers } from '../redux/actions';

class AnswerOptions extends Component {
  constructor(props) {
    super(props);

    this.currentQuestion = this.currentQuestion.bind(this);
    this.possibleAnswers = this.possibleAnswers.bind(this);
  }

  componentDidUpdate() {
    const { questions, saveAnswers } = this.props;
    if (questions.length)
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
    return [...question.incorrect_answers, question.correct_answer];
  }

  render() {
    return <div>test</div>;
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questions.questionIndex,
  questions: state.questions.questionsItems,
});

const mapDispatchToProps = (dispatch) => ({
  saveAnswers: (answers) => dispatch(saveAnswers(answers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);
