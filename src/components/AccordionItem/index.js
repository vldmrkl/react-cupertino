import React from 'react';
import PropTypes from 'prop-types';
import './AccordionItem.css';

function AccordionItem(props) {
  const { active, description, icon, onClick, title } = props;
  let activeClass = '';

  /* eslint no-unused-expressions: [2, { allowTernary: true }] */
  active ? (activeClass = 'active') : (activeClass = '');

  /* eslint-disable jsx-a11y/anchor-is-valid, no-script-url */
  return (
    <li className="rc-ai-item">
      <div
        className="rc-ai-item-head"
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex="0"
        role="button"
      >
        {icon && <img className="rc-ai-icon" src={icon} alt="icon" />}
        <a className="rc-ai-title" href="javascript:void(0);">
          {title}
        </a>
      </div>
      <div className={`rc-ai-desc ${activeClass}`}>{description}</div>
    </li>
  );
}
AccordionItem.defaultProps = {
  active: false,
  icon: null
};

AccordionItem.propTypes = {
  active: PropTypes.bool,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default AccordionItem;
