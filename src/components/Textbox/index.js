import React from 'react';
import PropTypes from 'prop-types';
import './Textbox.css';
/* eslint-disable react/no-unused-state */
class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      invalid: false,
      focused: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    const { invalid } = this.props;
    this.setState({
      invalid
    });
  }

  componentWillReceiveProps(newProps) {
    const { invalid } = this.props;

    if (invalid !== newProps.invalid) {
      this.setState({
        invalid: newProps.invalid
      });
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleFocus() {
    const { focused } = this.state;

    this.setState({
      focused: !focused
    });
  }

  render() {
    let extraStyle = {};
    let extraStyleForLabel = {};

    const { invalid, focused } = this.state;
    const { type, label } = this.props;

    if (invalid) {
      if (focused) {
        extraStyle = { border: '1px solid gray', backgroundColor: 'white' };
      } else {
        extraStyle = {
          border: '1px solid #FF2968',
          backgroundColor: '#fcc2c7'
        };
      }
      extraStyleForLabel = { color: '#FF2968', opacity: 1 };
    } else {
      extraStyle = {};
      extraStyleForLabel = {};
    }

    return (
      <div className="rc-tb-div">
        <input
          type={type}
          className="rc-textbox"
          onChange={this.handleChange}
          onBlur={this.handleFocus}
          onFocus={this.handleFocus}
          style={extraStyle}
          required
        />
        <span className="rc-textbox-label" style={extraStyleForLabel}>
          {label}
        </span>
      </div>
    );
  }
}

Textbox.defaultProps = {
  invalid: false,
  label: '',
  type: 'text'
};

Textbox.propTypes = {
  invalid: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string
};

export default Textbox;
