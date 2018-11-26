/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Textbox from '../components/Textbox';

storiesOf('Textbox', module)
  .add('with label props', () => <Textbox label="Login" />)
  .add('password', () => <Textbox label="Password" password />)
  .add('invalid', () => <Textbox label="Login" invalid />);
