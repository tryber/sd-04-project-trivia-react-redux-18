import React, { Component } from 'react';
import { connect } from 'react-redux';

class Questions extends Component {
  render() {
    const { questions, questionIndex, questionsLoading } = this.props;
    let currentQuestion = questions.filter(
      (question, index) => index === questionIndex,
    );
    return questionsLoading ? (
      <h3>Loading...</h3>
    ) : (
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
  questionIndex: state.questions.questionIndex,
  questions: state.questions.questionsItems,
  questionsLoading: state.questions.loading,
});

export default connect(mapStateToProps)(Questions);
