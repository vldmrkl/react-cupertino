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
            <label className={"container " + 
            this.props.theme + "-text " + this.props.color + "-back"}>
            {this.props.title}
                <input type="radio" onChange={this.handleChange} name="radio" />
                <span className="checkmark"></span>
            </label>
        );
    }
}

export default RadioButton;