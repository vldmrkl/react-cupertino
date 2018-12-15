import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import { GRADIENTS } from '../../styles/ColorSchema';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchColor: null,
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { checked, colorChecked, colorUnchecked } = this.props;

    if (checked) {
      this.setState({
        checked: true,
        switchColor: GRADIENTS[colorChecked]
      });
    } else {
      this.setState({
        switchColor: GRADIENTS[colorUnchecked]
      });
    }
  }

  handleChange(event) {
    const { colorChecked, colorUnchecked } = this.props;
    this.setState({
      checked: event.target.checked
    });

    if (event.target.checked) {
      setTimeout(() => {
        this.setState({
          switchColor: GRADIENTS[colorChecked]
        });
      }, 200);
    } else {
      setTimeout(() => {
        this.setState({
          switchColor: GRADIENTS[colorUnchecked]
        });
      }, 200);
    }
  }

  render() {
    const { checked, switchColor } = this.state;
    const { size } = this.props;

    return (
      <label className={`rc-switch ${size}-rc-switch`} htmlFor="def-rc-cb">
        <input
          type="checkbox"
          className="rc-switch-cb"
          id="def-rc-cb"
          onChange={this.handleChange}
          checked={checked}
        />
        <span
          className={`rc-switch-base ${size}-rc-base`}
          style={{ background: switchColor }}
        />
      </label>
    );
  }
}

Switch.defaultProps = {
  checked: false,
  colorChecked: 'green',
  colorUnchecked: 'grey',
  size: 'medium'
};

Switch.propTypes = {
  checked: PropTypes.bool,
  colorChecked: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  colorUnchecked: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Switch;
