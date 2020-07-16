import React, { Component } from 'react';

class Feedback extends Component {
  feedbackMessage(score) {
    return (score >= 3) ? 'Mandou bem!' : 'Podia ser melhor...';
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