/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './PullDownButton.css';

class PullDownButton extends React.Component {
  render() {
    const { options, onChange, size } = this.props;

    return (
      <div className={`rc-pull-down-button rc-${size}-pd-btn`}>
        <select className="rc-def-select" onChange={onChange}>
          {options &&
            options.map(item => {
              return <option value={item.value}>{item.label}</option>;
            })}
        </select>
      </div>
    );
  }
}

PullDownButton.defaultProps = {
  onChange: null,
  size: 'medium'
};

PullDownButton.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default PullDownButton;
