import React from 'react';
import './AppBar.css';
class AppBar extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        let position = "";
        if(this.props.fixed){
            position = "fixed";
        } else{
            position = "static";
        }

        return(
            <header className="cupertino-app-bar" style={{position: position}}>
                <div className="bar-content">
                    {this.props.logo &&
                        <img className="app-bar-logo" src={this.props.logo} alt="logo" />
                    }
                    <div className="bar-links">
                        <ul>
                            {this.props.children}
                        </ul>
                    </div>
                </div>
                <div className="bar-separator"></div>
            </header>
        );
    }
}

export default AppBar;