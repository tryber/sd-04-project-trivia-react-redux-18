import React from 'react';

class Timing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 30 };
    this.stopTiming = this.stopTiming.bind(this);
  }

  componentDidMount() {
    this.timing();
  }

  stopTiming() {
    this.setState({ time: 0 });
  }

  timing() {
    const { time } = this.state;
    setTimeout(() => {
      this.setState({
        time: time - 1,
      });
      if (time === 0) return this.stopTiming();
      return this.timing();
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <p>Time: {time}</p>
      </div>
    );
  }
}

export default Timing;
