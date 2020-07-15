import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="email">
            Email do Gravatar:
            <input data-testid="input-gravatar-email" type="email" id="email" />
          </label>
          <label htmlFor="username">
            Nome do Jogador:
            <input data-testid="input-player-name" type="text" id="username" />
          </label>
          <button data-testid="btn-play" type="button">
            JOGAR!
          </button>
        </div>
        <div>
          <button data-testid="btn-settings" type="button">
            Configurações
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
