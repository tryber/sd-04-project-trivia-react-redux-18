import React, { Component } from 'react';
import { getQuestions } from '../services/api';

class Question extends Component {
  componentDidMount() {
    console.log(getQuestions());
  }

  render() {
    return <div>test</div>;
  }
}

export default Question;
