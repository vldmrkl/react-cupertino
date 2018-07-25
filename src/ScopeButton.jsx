import React from 'react';

class ScopeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.selectAll) {
            if (this.state.checked) {
                let elements = document.getElementsByClassName('scope-button filled');
                console.log(elements.length);
                for (let i = 0; i < elements.length; i++) {
                    console.log(elements[i].className);
                    elements[i].className = 'scope-button';
                }
            }
            else{
                let elements = document.getElementsByClassName('scope-button');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].className = 'scope-button filled';
                }
            }
        }
        this.setState({
            checked: !this.state.checked
        });

    }

    render() {
        return (
            <button className={!this.state.checked === true ? "scope-button" : "scope-button filled"} onClick={this.handleClick} >{this.props.value}</button>
        )
    }
}

export default ScopeButton;