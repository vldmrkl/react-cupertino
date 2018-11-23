/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../components/Switch';

storiesOf('Switch', module)
  .add('with colorChecked', () => <Switch colorChecked="red" />)
  .add('with colorUnchecked', () => <Switch colorUnchecked="yellow" />)
  .add('with checked props', () => <Switch checked />)
  .add('with size props', () => <Switch size="small" />);
