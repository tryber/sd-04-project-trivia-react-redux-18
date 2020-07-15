import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      redirectConfig: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderBtnPlay = this.renderBtnPlay.bind(this);
    this.renderBtnConfig = this.renderBtnConfig.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  // localStorage.setItem('token', json.token)

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleRedirect() {
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
        id="play"
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
          onClick={this.handleRedirect}
        >
          Configurações
        </button>
      </div>
    );
  }

  render() {
    const { redirectConfig } = this.state;

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
