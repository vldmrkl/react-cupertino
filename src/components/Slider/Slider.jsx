import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 50
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        if(this.props.startValue){
            this.setState({
                value: this.props.startValue
            });
        }
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render(){
        let progressColor = ""
        if(this.props.progressColor !== null){
            progressColor = this.props.progressColor + "-progress";
        }

        let backgroundColor = ""
        if(this.props.backgroundColor !== null){
            backgroundColor = this.props.backgroundColor + "-background";
        }


        return(
            <input type="range" onChange={this.handleChange}
                   className={"cupertino-slider " + progressColor + " " + backgroundColor }
                   value={this.state.value} min={this.props.minValue} max={this.props.maxValue} />
        );
    }
}

Slider.defaultProps = {
    backgroundColor: 'grey',
    progressColor: 'blue',
    minValue: 0,
    maxValue: 100,
    startValue: 50
};

Slider.propTypes = {
    backgroundColor: PropTypes.oneOf(['blue', 'grey', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']),
    progressColor: PropTypes.oneOf(['blue', 'grey', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']),
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    startValue: PropTypes.number
};

export default Slider;