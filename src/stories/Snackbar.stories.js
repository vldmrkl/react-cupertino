/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Snackbar from '../components/Snackbar';

storiesOf('Snackbar', module)
  .add('with position props', () => (
    <Snackbar message="New message" position="top-right" />
  ))
  .add('with typo in position props', () => (
    <Snackbar
      message="Supeeeeer looooong message with no sense at all"
      position="typo"
    />
  ))
  .add('with timeout props', () => (
    <Snackbar message="Update available!" position="top-left" timeout={10000} />
  ))
  .add('with dismissLabelColor props', () => (
    <Snackbar message="Update available!" dismissLabelColor="orange" />
  ))
  .add('with handleClick', () => (
    <Snackbar message="Update available!" handleClick={action('clicked')} />
  ));
