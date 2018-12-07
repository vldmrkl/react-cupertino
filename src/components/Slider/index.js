import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 50
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { startValue } = this.props;

        this.setState({
            value: startValue
        });
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { value } = this.state;
        const { backgroundColor, maxValue, minValue, progressColor } = this.props;

        const progressColorClass = `${progressColor  }-progress`;
        const backgroundColorClass = `${backgroundColor  }-background`;


        return (
            <input type="range" onChange={this.handleChange}
                className={`cupertino-slider ${  progressColorClass  } ${  backgroundColorClass}`}
                value={value} min={minValue} max={maxValue} />
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