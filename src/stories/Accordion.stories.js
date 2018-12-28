/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from '../components/Accordion';
import icon1 from './assets/1.svg';
import icon2 from './assets/2.svg';
import icon3 from './assets/3.svg';

const items = [
  {
    id: 1,
    title: 'Title 1',
    icon: icon1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  {
    id: 2,
    title: 'Title 2',
    icon: icon2,
    description:
      'Egestas integer eget aliquet nibh praesent tristique magna sit. Nisl condimentum id venenatis a condimentum vitae.'
  },

  {
    id: 3,
    title: 'Title 3',
    icon: icon3,
    description:
      'Faucibus nisl tincidunt eget nullam non nisi est sit amet. Habitant morbi tristique senectus et netus et malesuada fames.'
  }
];

storiesOf('Accordion', module).add('with items props', () => (
  <Accordion items={items} />
));
