import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

function Slider(props) {
  const {
    backgroundColor,
    maxValue,
    minValue,
    onChange,
    progressColor,
    step
  } = props;

  const progressColorClass = `${progressColor}-progress`;
  const backgroundColorClass = `${backgroundColor}-background`;

  return (
    <input
      type="range"
      onChange={onChange}
      className={`rc-slider rc-slider-${progressColorClass} rc-slider-${backgroundColorClass}`}
      min={minValue}
      max={maxValue}
      step={step}
    />
  );
}

Slider.defaultProps = {
  backgroundColor: 'grey',
  progressColor: 'blue',
  minValue: 0,
  maxValue: 100,
  onChange: null,
  step: 1
};

Slider.propTypes = {
  backgroundColor: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  progressColor: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number
};

export default Slider;
