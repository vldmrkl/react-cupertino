/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../components/Checkbox';
import icon from './assets/fb.png';

storiesOf('Checkbox', module)
  .add('checked', () => <Checkbox colorChecked="green" checked />)
  .add('with colorChecked', () => <Checkbox colorChecked="red" />)
  .add('with colorUnchecked', () => <Checkbox colorUnchecked="orange" />)
  .add('with size props', () => <Checkbox size="medium" />)
  .add('with icon props', () => <Checkbox icon={icon} size="medium" />);
