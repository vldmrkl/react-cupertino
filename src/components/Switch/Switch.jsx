import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import { GRADIENTS } from '../ColorSchema';

class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            switchColor: null,
            checked: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        if(this.props.checked){
            this.setState({
                checked: true,
                switchColor: GRADIENTS[this.props.colorChecked]
            });
        } else{
            this.setState({
                switchColor: GRADIENTS[this.props.colorUnchecked]
            });
        }
    }
        
    handleChange(event){
        this.setState({
            checked: event.target.checked
        });
        
        if(event.target.checked){
            setTimeout(() => {
                this.setState({
                    switchColor: GRADIENTS[this.props.colorChecked]
                });
            }, 200);
            
        } else{
            setTimeout(() => {
                this.setState({
                    switchColor: GRADIENTS[this.props.colorUnchecked]
                });
            }, 200);
           
        }
    }

    render(){
        return(
            <label className={"switch " + this.props.size}>
                <input type="checkbox" onChange={this.handleChange} checked={this.state.checked} />
                <span className={"switch-base " + this.props.size+"-base"} style={{background: this.state.switchColor}}></span>
            </label>
        );
    }
}

Switch.defaultProps = {
    checked: false,
    colorChecked: 'green',
    colorUnchecked: 'grey',
    size: 'medium'
};

Switch.propTypes = {
    checked: PropTypes.bool,
    colorChecked: PropTypes.oneOf(['blue', 'grey', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']),
    colorUnchecked: PropTypes.oneOf(['blue', 'grey', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Switch;
