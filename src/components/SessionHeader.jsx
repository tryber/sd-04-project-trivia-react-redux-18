import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import emailHash from '../services/genEmailHash';
import './SessionHeader.css';

class SessionHeader extends Component {
  render() {
    const { email, name, score } = this.props;
    return (
      <header className="session-header">
        <div className="player-info">
          <img
            src={`https://www.gravatar.com/avatar/${emailHash(email)}`}
            alt=""
            data-testid="header-profile-picture"
            className="gravatar-icon"
          />
          <h3 data-testid="header-player-name" className="header-player-name">
            {name}
          </h3>
        </div>
        <h3 data-testid="header-score">{!score ? 0 : score}</h3>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  score: state.reducer.player.score,
  name: state.reducer.player.name,
  email: state.reducer.player.gravatarEmail,
});

SessionHeader.propTypes = {
  score: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(SessionHeader);
