import React, { Component } from 'react';
import './App.css';
import Switch from './components/Switch/Switch';
import PushButton from './components/PushButton/PushButton';
import Checkbox from './components/Checkbox/Checkbox';
import Textbox from './components/Textbox/Textbox';
import Slider from './components/Slider/Slider';
import SnackBar from './components/SnackBar/Snackbar';
import Alert from './components/Alert/Alert';
import AppBar from './components/AppBar/AppBar';
import cbIcon from './cbIcon.svg';
import cbIcon2 from './cbIcon2.svg';
class App extends Component {
  constructor(){
    super();
    this.state = {
      validPassword: false,
      isOpen: false
    };
    this.checkPassword =this.checkPassword.bind(this);
  }

checkPassword() {
  this.setState({
    validPassword: !this.state.validPassword
  });

}

toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

  render() {
    return (
      <div className="App">
        <AppBar />
        
        <div className="left-div">
          <Switch /><br /><br />
          <Switch size="small"
            colorUnchecked="red"
            colorChecked="blue" checked /> 
            <br /><br />
          <Switch size="large"
            colorChecked="orange" />
            <br /><br />

          <PushButton title="Submit"
            color="orange" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }} />
            <br /><br />

          <PushButton title="Submit"
            color="purple"
            size="small"
            click={this.checkPassword}
          />
          <br /><br />

          <PushButton title="Submit"
            color="pink"
            size="large"
            style={{ fontSize: "35px" }}
            click={this.toggleModal} /> <br /> <br />
            

            <SnackBar message="But, not this one!" />  
            <br /> <br />
            <SnackBar message="Hello, my name is Snackbar! Is this a new line? Well, kind of." />
<br /> <br />
            
        </div>
        <div className="right-div">
          <Checkbox size="medium"
            icon={cbIcon} />

          <br />

          <Checkbox size="large"
            icon={cbIcon2}
            colorChecked="green"
            colorUnchecked="yellow" />

          <br />

          <Checkbox size="small"
            icon={cbIcon}
            colorChecked="red"
            checked
            colorUnchecked="orange" />
          <br /><br />
          <Textbox label="Login" />
          <br /><br />
          <Textbox label="Password" invalid={this.state.validPassword} password />
          <br /><br />
          <div className="slider-wrapper">
            <Slider startValue={10} />
          </div>
          <br /><br />
          
          <Alert show={this.state.isOpen}
                 onClose={this.toggleModal}
                 title="Success!">
                 Picture was successfully saved.
         </Alert>
        </div>
        <br />
        <br /><br /><br /><br /><br /><br />
        <br /><br />

      </div>
    );
  }
}

export default App;
