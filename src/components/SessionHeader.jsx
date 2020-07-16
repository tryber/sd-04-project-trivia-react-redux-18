import React from 'react';
import emailHash from '../services/genEmailHash';
import './SessionHeader.css';

const getUserInfo = () => JSON.parse(localStorage.getItem('state'));

const SessionHeader = () => (
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
    <h3 data-testid="header-score">{`Score: ${getUserInfo().score}`}</h3>
  </header>
);

export default SessionHeader;
