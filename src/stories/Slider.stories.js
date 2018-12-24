/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../components/Slider';

function handleChange(e) {
  console.log(e.target.value);
}

storiesOf('Slider', module)
  .add('with startValue props', () => (
    <div style={{ width: '15%' }}>
      <Slider startValue={25} />
    </div>
  ))
  .add('with maxValue props', () => (
    <div style={{ width: '15%' }}>
      <Slider maxValue={500} />
    </div>
  ))
  .add('with backgroundColor', () => (
    <div style={{ width: '15%' }}>
      <Slider backgroundColor="pink" />
    </div>
  ))
  .add('with progressColor', () => (
    <div style={{ width: '15%' }}>
      <Slider progressColor="orange" />
    </div>
  ))
  .add('with onChange', () => (
    <div style={{ width: '15%' }}>
      <Slider onChange={handleChange} />
    </div>
  ));
