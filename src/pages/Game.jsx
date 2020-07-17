import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestions, updateQuestionIndex } from '../redux/actions/index';
import SessionHeader from '../components/SessionHeader';
import Questions from '../components/Questions';
import AnswerOptions from '../components/AnswerOptions';
import { getQuestions } from '../services/api';
import './Game.css';

class Game extends Component {
  componentDidMount() {
    const { token, saveQuestions } = this.props;
    getQuestions(5, token).then((data) => saveQuestions(data.results));
  }

  render() {
    const { updateQuestionIndex } = this.props;
    return (
      <div className="game-page-container">
        <SessionHeader />
        <div className="page-container">
          <div className="left-container">
            <Questions />
          </div>
          <div className="right-container">
            <AnswerOptions />
            <button onClick={() => updateQuestionIndex()}>Próxima</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveQuestions: (questions) => dispatch(saveQuestions(questions)),
  updateQuestionIndex: () => dispatch(updateQuestionIndex()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
