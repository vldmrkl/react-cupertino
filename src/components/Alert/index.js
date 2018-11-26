import React from 'react';
import PropTypes from 'prop-types';
import PushButton from '../PushButton';
import './Alert.css';

class Alert extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="alert-backdrop">
        <div className="alert">
          {this.props.title && (
            <h1 className="alert-title">{this.props.title}</h1>
          )}
          <div className="alert-content">{this.props.children}</div>
          <div className="alert-footer">
            <PushButton
              title="OK"
              color="blue"
              size="small"
              click={this.props.onClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

Alert.defaultProps = {
  onClose: null,
  show: false,
  title: ''
};

Alert.propTypes = {
  children:  PropTypes.node.isRequired,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string
};

export default Alert;
