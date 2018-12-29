/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '../components/Tag';
import icon from './assets/fb.png';

let checked = false;

// Note: storybook doesn't re-render story after onClick method, so you will not see UI change, but the state will be changed
function handleChange() {
  checked = !checked;
}

storiesOf('Tag', module)
  .add('with onClick function', () => (
    <Tag onClick={handleChange} title="Title" checked={checked} />
  ))
  .add('checked', () => <Tag title="Title" checked />)
  .add('with icon', () => (
    <Tag title="imported from Facebook" checked icon={icon} />
  ));
