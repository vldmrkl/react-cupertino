import React, {Component} from 'react';
import './Snackbar.css';
import PropTypes from 'prop-types';
import { COLORS, GRADIENTS } from '../ColorSchema';


class SnackBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            style: {
                background: GRADIENTS[props.backgroundColor],
                color: COLORS[props.messageColor]
            }
        };
        this.onClickDismiss = this.onClickDismiss.bind(this);
    }

    onClickDismiss() {
        this.setState({ visible: false });
    }

    render() {
        return (
            // <div className="SnackBar" style={this.state.style}>
            <div className="SnackBar" style={this.state.visible ? {display: "flex"} : {display: "none"}}>
            {/* <div className="SnackBar" style={this.state.visible ? {display: "flex"} : {animationName: "dismissSnackBar", animationDuration: "1s"}}> */}
                <p className="SnackBar-message">
                    {this.props.message}
                </p>
                <label className="SnackBar-button" onClick={this.onClickDismiss}>
                    {this.props.dismissLabel}
                </label> 
            </div> 
        );
    }

    // componentDidMount() {
    //     if (!this.state.visible) {
    //         this.setState({
    //             style: {
    //                 display: "none"
    //             }
    //         });
    //     }
    // }

    // shouldComponentUpdate() {
    //     console.log(this.state.style.display);
    //     console.log(this.state.style.display == "none");
    //     if (this.state.style.display == "none") {
    //         return false;   
    //     }
    // }
}


SnackBar.defaultProps = {
    dismissLabel: "DISMISS",
    visible: true,
    size: "medium",
    message: "NOTIFICATION!",
    backgroundColor: "grey",
    messageColor: "white"
};

SnackBar.propTypes = {
    visible: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    dismissLabel: PropTypes.string,
    message: PropTypes.string,
    backgroundColor: PropTypes.oneOf(Object.keys(GRADIENTS)),
    messageColor: PropTypes.oneOf(Object.keys(COLORS)),
    dismissLabelColor: PropTypes.oneOf(Object.keys(COLORS))
};

export default SnackBar;
