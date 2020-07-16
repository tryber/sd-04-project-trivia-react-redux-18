import React from 'react';
import { connect } from 'react-redux';
import emailHash from '../services/genEmailHash';
import './SessionHeader.css';

const getUserInfo = () => JSON.parse(localStorage.getItem('state'));

const SessionHeader = ({ score }) => (
  <header className="session-header">
    <div className="player-info">
      <img
        src={`https://www.gravatar.com/avatar/${emailHash(
          getUserInfo().player.gravatarEmail,
        )}`}
        alt=""
        data-testid="header-profile-picture"
        className="gravatar-icon"
      />
      <h3 data-testid="header-player-name" className="header-player-name">
        {getUserInfo().player.name}
      </h3>
    </div>
    <h3 data-testid="header-score">{!score ? 0 : score}</h3>
  </header>
);

const mapStateToProps = (state) => ({
  score: state.reducer.player.score,
});

export default connect(mapStateToProps)(SessionHeader);
