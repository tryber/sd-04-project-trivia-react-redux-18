import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { getToken } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      redirectPlay: false,
      redirectConfig: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderBtnPlay = this.renderBtnPlay.bind(this);
    this.renderBtnConfig = this.renderBtnConfig.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleConfig = this.handleConfig.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handlePlay() {
    getToken().then((json) => {
      localStorage.setItem('token', json.token);
      localStorage.setItem(
        'state',
        JSON.stringify({
          player: {
            name: this.state.username,
            gravatarEmail: this.state.email,
          },
        }),
      );
      this.setState({ redirectPlay: true });
    });
  }

  handleConfig() {
    this.setState({
      redirectConfig: true,
    });
  }

  renderInputs() {
    return (
      <div>
        <label htmlFor="email">
          Email do Gravatar:
          <input
            data-testid="input-gravatar-email"
            type="email"
            name="email"
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="username">
          Nome do Jogador:
          <input
            data-testid="input-player-name"
            type="text"
            name="username"
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }

  renderBtnPlay() {
    const { email, username } = this.state;
    return (
      <button
        data-testid="btn-play"
        type="button"
        onClick={this.handlePlay}
        disabled={!email || !username}
      >
        JOGAR!
      </button>
    );
  }

  renderBtnConfig() {
    return (
      <div>
        <button
          data-testid="btn-settings"
          type="button"
          onClick={this.handleConfig}
        >
          Configurações
        </button>
      </div>
    );
  }

  render() {
    const { redirectConfig, redirectPlay } = this.state;

    if (redirectPlay) return <Redirect to="/game" />;
    if (redirectConfig) return <Redirect to="/settings" />;
    return (
      <div>
        {this.renderInputs()}
        {this.renderBtnPlay()}
        {this.renderBtnConfig()}
      </div>
    );
  }
}

export default Home;
