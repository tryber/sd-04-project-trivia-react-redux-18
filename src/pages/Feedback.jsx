import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  feedbackMessage(score) {
    return score >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
  }

  feedbackResults(score, assertions) {
    return (
      <div>
        <h3>Assertions</h3>
        <p data-testid="feedback-total-question">
          You got {assertions} assertions!
        </p>
        <h3>Your Score</h3>
        <p data-testid="feedback-total-question">Your score is {score}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Feedback</h1>
        <h3 data-testid="feedback-text">{this.feedbackMessage()}</h3>
        {this.feedbackResults()}
        <Link to="/">
          <button type="button" data-testid="btn-play-again">
            JOGAR NOVAMENTE
          </button>
        </Link>
        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">
            VER RANKING
          </button>
        </Link>
      </div>
    );
  }
}

export default Feedback;
