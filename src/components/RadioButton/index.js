import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    


    handleChange(e){
        this.setState({
            checked: e.target.checked
        });
    }

    render() {
        return (
            <label className={`container ${  
            this.props.size  }-rb-container ${  
            this.props.theme  }-text ${  this.props.color  }-back`}>
            {this.props.title}
                <input type="radio"
                       defaultChecked={this.props.checked}
                       onChange={this.handleChange}
                       name="radio" />
                <span className={`checkmark ${  this.props.size  }-checkmark`} />
            </label>
        );
    }
}

RadioButton.defaultProps = {
    color: 'blue',
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    theme: 'light'
};

RadioButton.propTypes ={
    color: PropTypes.oneOf(['blue', 'grey', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    theme: PropTypes.oneOf(['dark', 'light']),
}

export default RadioButton;