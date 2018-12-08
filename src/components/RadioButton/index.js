/* eslint-disable react/no-unused-state */
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
        const { checked, color, size, title, theme } = this.props;

        return (
            <label className={`container ${  
            size  }-rb-container ${  
            theme  }-text ${  color  }-back`} htmlFor="def-rc-radio">
            {title}
                <input type="radio"
                       id="def-rc-radio"
                       defaultChecked={checked}
                       onChange={this.handleChange}
                       name="radio" />
                <span className={`checkmark ${  size  }-checkmark`} />
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