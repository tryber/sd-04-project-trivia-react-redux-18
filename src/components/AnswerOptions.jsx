import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnDisabled: false,
    };
    this.handleClickCorrect = this.handleClickCorrect.bind(this);
    this.handleClickIncorrect = this.handleClickIncorrect.bind(this);
  }

  // botão - respostas:
  // 1) desabilita todos os botões
  // 2) adiciona bordas aos botões
  // 3) salva o tempo restante e a dificuldade da pergunta (chave "difficulty" do array results)

  handleClickIncorrect() {
    this.setState({ btnDisabled: true });
  }

  handleClickCorrect() {
    this.setState({ btnDisabled: true });
    // localStorage.setItem('score', )
  }

  render() {
    const { questions, questionIndex } = this.props;
    const { btnDisabled } = this.state;
    let currentQuestion = questions.filter(
      (question, index) => index === questionIndex,
    );
    let answers = [];
    currentQuestion.forEach(
      (item) =>
        (answers = [
          ...answers,
          ...item.incorrect_answers,
          item.correct_answer,
        ].sort(() => Math.random() - 0.5)),
    );
    return (
      <div>
        {answers.map((item, index) =>
          item === currentQuestion[0].correct_answer ? (
            <button
              key={item}
              type="button"
              data-testid="correct-answer"
              onClick={this.handleClickCorrect}
              disabled={btnDisabled}
            >
              {item}
            </button>
          ) : (
            <button
              key={item}
              type="button"
              data-testid={`wrong-answer-${index}`}
              onClick={this.handleClickIncorrect}
              disabled={btnDisabled}
            >
              {item}
            </button>
          ),
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.reducer.questions.questionIndex,
  questions: state.reducer.questions.questionsItems,
});

export default connect(mapStateToProps, null)(AnswerOptions);
