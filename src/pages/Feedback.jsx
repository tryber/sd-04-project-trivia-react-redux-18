import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SessionHeader from '../components/SessionHeader';

const feedbackMessage = (score) => (score >= 3 ? 'Mandou bem!' : 'Podia ser melhor...');
const feedbackResults = (score, assertions) => (
  <div>
    <h3>Assertions</h3>
    <p data-testid="feedback-total-question">
      You got {assertions} assertions!
    </p>
    <h3>Your Score</h3>
    <p data-testid="feedback-total-score">Your score is {score}</p>
  </div>
);

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        <h1>Feedback</h1>
        <SessionHeader />
        <h3 data-testid="feedback-text">{feedbackMessage(score)}</h3>
        {feedbackResults(score, assertions)}
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

const mapStateToProps = (state) => ({
  assertions: state.userInfo.player.assertions,
  score: state.userInfo.player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Feedback);
