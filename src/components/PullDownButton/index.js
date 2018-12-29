import React from 'react';
import PropTypes from 'prop-types';
import './PullDownButton.css';

function PullDownButton(props) {
  const { options, onChange, size } = props;

  return (
    <div className={`rc-pull-down-button rc-${size}-pd-btn`}>
      <select className="rc-def-select" onChange={onChange}>
        {options &&
          options.map(item => <option value={item.value}>{item.label}</option>)}
      </select>
    </div>
  );
}

PullDownButton.defaultProps = {
  onChange: null,
  size: 'medium'
};

PullDownButton.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default PullDownButton;
