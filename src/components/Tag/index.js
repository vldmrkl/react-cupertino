/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

function Tag(props) {
  const { checked, icon, onClick, title } = props;

  return (
    <div className="rc-tag" onClick={onClick}>
      <input
        className="rc-def-tag-cb"
        name="def-tag-cb"
        type="checkbox"
        checked={checked}
      />
      <label className="rc-tag-label" htmlFor="def-tag-cb">
        {icon && <img className="rc-tag-icon" src={icon} alt="tag icon" />}
        <span className="rc-tag-title">{title}</span>
      </label>
    </div>
  );
}

export default Tag;
