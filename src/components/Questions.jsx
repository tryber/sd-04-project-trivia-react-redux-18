import React, { Component } from 'react';
import { connect } from 'react-redux';

class Questions extends Component {
  render() {
    const { questions, questionIndex } = this.props;
    let currentQuestion = questions.filter(
      (question, index) => index === questionIndex,
    );
    return (
      <div className="question-container">
        <div className="category-container">
          {currentQuestion.map((question, index) => (
            <p
              key={`${question.category}${index}`}
              className="question-category"
              data-testid="question-category"
            >
              {question.category}
            </p>
          ))}
        </div>
        {currentQuestion.map((question, index) => (
          <p
            key={`${question.question}${index}`}
            className="question"
            data-testid="question-text"
          >
            {question.question}
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.reducer.questions.questionIndex,
  questions: state.reducer.questions.questionsItems,
});

export default connect(mapStateToProps)(Questions);
