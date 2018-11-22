import React from 'react';
import PropTypes from 'prop-types';
import './PushButton.css';
import { COLORS, GRADIENTS } from '../../styles/ColorSchema';

class PushButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: null,
      fontSize: PushButton.defaultProps.style.fontSize,
      fontFamily: PushButton.defaultProps.style.fontFamily
    };
    this.setSolidColorBackground = this.setSolidColorBackground.bind(this);
    this.setDarkSolidColorBackground = this.setDarkSolidColorBackground.bind(
      this
    );
    this.setGradientBackground = this.setGradientBackground.bind(this);
  }

  componentDidMount() {
    this.setState({
      background: GRADIENTS[this.props.color]
    });

    if (this.props.style.fontSize) {
      this.setState({
        fontSize: this.props.style.fontSize
      });
    }

    if (this.props.style.fontFamily) {
      this.setState({
        fontFamily: this.props.style.fontFamily
      });
    }
  }

  setSolidColorBackground() {
    this.setState({
      background: COLORS[this.props.color]
    });
  }

  setGradientBackground() {
    this.setState({
      background: GRADIENTS[this.props.color]
    });
  }

  setDarkSolidColorBackground() {
    let darkName =
      'dark' +
      this.props.color.charAt(0).toUpperCase() +
      this.props.color.slice(1);
    console.log(darkName);
    this.setState({
      background: COLORS[darkName]
    });
  }

  render() {
    return (
      <button
        className={'push-button ' + this.props.size + '-btn'}
        style={{
          background: this.state.background,
          fontFamily: this.state.fontFamily,
          fontSize: this.state.fontSize
        }}
        onMouseEnter={this.setSolidColorBackground}
        onMouseLeave={this.setGradientBackground}
        onMouseUp={this.setGradientBackground}
        onMouseDown={this.setDarkSolidColorBackground}
        onClick={this.props.click}
      >
        {this.props.title}
      </button>
    );
  }
}

PushButton.defaultProps = {
  color: 'blue',
  size: 'medium',
  style: {
    fontSize: '12px',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  title: 'Title'
};

PushButton.propTypes = {
  color: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.object,
  title: PropTypes.string
};

export default PushButton;
