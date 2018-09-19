import React from 'react';
import './Textbox.css';

class Textbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    render(){
        return(
            <div className="tb-div">
                <input type="text" className="cupertino-textbox" required />
                <span className="rs-float-label">{this.props.label}</span>
            </div>
        );
    }
}

export default Textbox;