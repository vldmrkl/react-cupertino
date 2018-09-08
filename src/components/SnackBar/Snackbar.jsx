import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SnackBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: props.style ? props.style : {marginLeft: "100px", height: "100px", width: "500px", borderRadius: "12px", background: "linear-gradient(180deg, #6C6C6C 0%, #434343 100%)", opacity: "0.8", /*filter: "blur(1px)",*/ color: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"},
            logoSrc: props.logoSrc,
            // logoAlt: props.logoAlt,
            message: props.message,
            dismiss: props.dismissLabel ? props.dismissLabel : "DISMISS"
        };
        this.onClickDismiss = this.onClickDismiss.bind(this);
    }

    onClickDismiss() {

    }

    render() {
        return this.state.logoSrc ? (
            <div className="SnackBar" style={this.state.style} >
                <img src={this.state.logoSrc} alt={/*this.state.logoAlt*/"logo"} style={{height: "50px", marginLeft: "5%", filter: "blur(0px)"}} />
                <p style={{filter: "blur(0px)"}}>{this.state.message}</p>
                <button type="button" style={{marginRight: "5%", filter: "blur(0px)"}}>{this.state.dismiss}</button>
            </div>
        ) : (
            <div className="SnackBar" style={this.state.style} >
            <p style={{marginLeft: "5%"}}>{this.state.message}</p>
            <button type="button" style={{marginRight: "5%"}}>{this.state.dismiss}</button>
        </div>
        );
    }
}

export default SnackBar;