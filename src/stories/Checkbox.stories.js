/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../components/Checkbox';

storiesOf('Checkbox', module)
  .add('checked', () => <Checkbox colorChecked="green" checked />)
  .add('with colorChecked', () => <Checkbox colorChecked="red" />)
  .add('with colorUnchecked', () => <Checkbox colorUnchecked="orange" />)
  .add('with size props', () => <Checkbox size="medium" />);
