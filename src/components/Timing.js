import React from 'react';
import { connect } from 'react-redux';
import { updateTimer } from '../redux/actions';
import PropTypes from 'prop-types';

class Timing extends React.Component {
  componentDidMount() {
    const { changeTimer } = this.props;

    this.intervalID = setInterval(() => changeTimer(), 1000);
  }

  render() {
    const { timer } = this.props;
    if (timer < 1) clearInterval(this.intervalID);
    return (
      <div>
        <p>Time: {timer}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.time.time,
});

const mapDispatchToProps = (dispatch) => ({
  changeTimer: () => dispatch(updateTimer()),
});

Timing.propTypes = {
  changeTimer: PropTypes.func.isRequired,
  timer: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timing);
