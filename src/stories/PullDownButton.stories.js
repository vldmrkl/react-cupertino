/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PullDownButton from '../components/PullDownButton';

const options = [
  {
    value: 'react',
    label: 'React'
  },

  {
    value: 'vue',
    label: 'Vue'
  },

  {
    value: 'angular',
    label: 'Angular'
  }
];

storiesOf('PullDownButton', module)
  .add('with options props', () => <PullDownButton options={options} />)
  .add('small', () => <PullDownButton options={options} size="small" />)
  .add('medium', () => <PullDownButton options={options} size="medium" />)
  .add('large', () => <PullDownButton options={options} size="large" />);
