/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../components/RadioButton';

storiesOf('RadioButton', module)
  .add('checked', () => (
    <RadioButton title="Checked" theme="dark" color="red" checked />
  ))
  .add('with color props', () => (
    <RadioButton title="Purple" theme="dark" color="purple" />
  ))
  .add('with size props', () => (
    <RadioButton title="Small" theme="dark" size="small" />
  ))
  .add('with theme props', () => <RadioButton title="Dark" theme="dark" />);
