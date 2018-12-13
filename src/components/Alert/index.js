import React from 'react';
import PropTypes from 'prop-types';
import PushButton from '../PushButton';
import './Alert.css';

function Alert(props) {
  const { children, onClose, show, title } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="alert-backdrop">
      <div className="alert">
        {title && <h1 className="alert-title">{title}</h1>}
        <div className="alert-content">{children}</div>
        <div className="alert-footer">
          <PushButton title="OK" color="blue" size="small" click={onClose} />
        </div>
      </div>
    </div>
  );
}

Alert.defaultProps = {
  onClose: null,
  show: false,
  title: ''
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string
};

export default Alert;
