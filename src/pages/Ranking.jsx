import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.setState({ redirectHome: true });
  }

  render() {
    const { redirectHome } = this.state;

    if (redirectHome) return <Redirect to="/" />;
    return (
      <div>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={this.handleRedirect}
        >
          Voltar ao Início
        </button>
      </div>
    );
  }
}

export default Ranking;
