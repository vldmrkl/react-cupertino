/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from '../components/Alert';

storiesOf('Alert', module).add('with props', () => (
  <Alert show onClose={action('clicked')} title="Success!">
    This is alert
  </Alert>
));
