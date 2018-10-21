import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Switch from './components/Switch/Switch';
import PushButton from './components/PushButton/PushButton';
import Checkbox from './components/Checkbox/Checkbox';
import cbIcon from './checkmark-orig.png';
import SnackBar from './components/SnackBar/Snackbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cupertino</h1>
        </header>
        <div className="left-div">
          <Switch /><br /><br />
          <Switch size="small"
            colorUnchecked="red"
            colorChecked="blue" checked /> <br /><br />
          <Switch size="large"
            colorChecked="orange" /><br /><br />

          <PushButton title="Submit"
            color="orange"  style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} /><br /><br />

          <PushButton title="Submit"
            color="purple"
            size="small"
            /><br /><br />

            <PushButton title="Submit"
            color="pink"
            size="large"
            style={{fontSize: "35px"}}  /> <br /> <br />

            <Checkbox size="medium"
            icon={cbIcon}/>


            <SnackBar message="But, not this one!" />            
            <SnackBar message="Hello, my name is Snackbar! Is this a new line? Well, kind of." />

            
        </div>
        <div className="right-div">

        </div>
        <br />
        <br /><br /><br /><br /><br /><br />
        <br /><br />

      </div>
    );
  }
}

export default App;
