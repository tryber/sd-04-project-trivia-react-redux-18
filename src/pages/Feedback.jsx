import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const feedbackMessage = (score) => (
  (score >= 3) ? 'Mandou bem!' : 'Podia ser melhor...'
);
const feedbackResults = (score, assertions) => (
  <div>
    <h3>Assertions</h3>
    <p data-testid="feedback-total-question">
      You got {assertions} assertions!
    </p>
    <h3>Your Score</h3>
    <p data-testid="feedback-total-question">Your score is {score}</p>
  </div>
);

class Feedback extends Component {
  render() {
    return (
      <div>
        <h1>Feedback</h1>
        <h3 data-testid="feedback-text">{feedbackMessage()}</h3>
        {feedbackResults()}
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
