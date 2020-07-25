import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Ranking.css';

class Ranking extends Component {
  render() {
    const { rank } = this.props;
    localStorage.setItem('ranking', JSON.stringify(rank));

    const compare = (a, b) => {
      let comparison = 0;
      if (a.score < b.score) {
        comparison = 1;
      } else if (a.score > b.score) {
        comparison = -1;
      }
      return comparison;
    };

    return (
      <div className="ranking-container">
        <h1 data-testid="ranking-title">Ranking</h1>        
        {rank.sort(compare).map(({ name, score, picture }, index) => (
          <div className="rank-position">
            <img src={picture} alt={`${name} gravatar`} />
            <p data-testid={`player-name-${index}`}>{name}</p>
            <p data-testid={`player-score-${index}`} className="points">{score}</p>
          </div>
        ))}
        <Link to="/">
          <button data-testid="btn-go-home" type="button" className="btn">
            Voltar ao Início
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rank: state.ranking.ranking,
});

Ranking.propTypes = {
  rank: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Ranking);
