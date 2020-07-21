import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import emailHash from '../services/genEmailHash';

class Ranking extends Component {
  render() {
    const { name, score, email } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Link to="/">
          <button data-testid="btn-go-home" type="button">
            Voltar ao Início
          </button>
        </Link>
        <img
          src={`https://www.gravatar.com/avatar/${emailHash(email)}`}
          alt=""
        />
        <p data-testid={`player-name-${0}`}>{name}</p>
        <p data-testid={`player-score-${0}`}>{score}</p>
      </div>
    );
  }
}

// localStorage.setItem('ranking', JSON.stringify([{name, score, picture: }]))

const mapStateToProps = (state) => ({
  name: state.userInfo.player.name,
  score: state.userInfo.player.score,
  email: state.userInfo.player.gravatarEmail,
});

Ranking.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Ranking);
