import React from 'react';
import PushButton from '../PushButton/PushButton';
import './Alert.css';

class Alert extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="alert-backdrop">
                <div className="alert">
                    {this.props.title &&
                        <h1 className="alert-title">{this.props.title}</h1>
                    }
                    <div className="alert-content">
                        {this.props.children}
                    </div>
                    <div className="alert-footer">
                    <PushButton title="OK"
                            color="blue" size="small" 
                            click={this.props.onClose} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;