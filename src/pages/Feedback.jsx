import React, { Component } from 'react';

class Feedback extends Component {
  feedbackMessage(score) {
    return (score >= 3) ? 'Mandou bem!' : 'Podia ser melhor...';
  }

  feedbackResults(score, assertions) {
    return (
      <div>
        <h3>Assertions Questions</h3>
        <p data-testid="feedback-total-question">{assertions}</p>
        <h3>Your Score</h3>
        <p data-testid="feedback-total-question">{score}</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Feedback</h1>
        <h3 data-testid="feedback-text">{this.feedbackMessage()}</h3>
      </div>
    );
  }
}

export default Feedback;