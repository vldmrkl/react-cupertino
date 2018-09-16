import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';
import { GRADIENTS } from '../ColorSchema';

//TODO: fix icon's position

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            checked: false,
            size: "small"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    componentDidMount() {
        if (this.props.size) {
            this.setState({
                checked: this.props.checked
            }, ()=>{
                if(this.state.checked){
                    this.setState({
                        size: this.props.size,
                        color: GRADIENTS[this.props.colorChecked]
                    });
                } else{
                    this.setState({
                        size: this.props.size,
                        color: GRADIENTS[this.props.colorUnchecked]
                    });
                }
            });
            
        } 
    }

    handleChange(e) {
        this.setState({
            checked: e.target.checked
        });
        this.changeColor(e.target.checked);
    }

    handleIconClick() {
        this.setState({
            checked: !this.state.checked
        }, () => {
            this.changeColor(this.state.checked)
        });

    }

    changeColor(checked) {
        if (checked) {
            this.setState({
                color: GRADIENTS[this.props.colorChecked]
            });
        } else {
            this.setState({
                color: GRADIENTS[this.props.colorUnchecked]
            });
        }
    }

    render() {
        return (
            <span className={"cupertino-checkbox " + this.state.size + "-checkbox"}
                style={{ background: this.state.color }}>
                                


                    <img className={"checkbox-icon "} src={this.props.icon} 
                     onClick={this.handleIconClick} alt="icon" />
            </span>
        );
    }
}

Checkbox.defaultProps = {
    checked: false,
    colorChecked: 'blue',
    colorUnchecked: 'grey',
    size: 'small'
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    colorChecked: PropTypes.oneOf(['blue', 'grey', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']),
    colorUnchecked: PropTypes.oneOf(['blue', 'grey', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Checkbox;