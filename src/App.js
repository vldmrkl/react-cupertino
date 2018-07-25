import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Switch from './components/Switch/Switch';
import PushButton from './components/PushButton/PushButton';

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
            style={{fontSize: "35px"}}  />

          {/* <button className="push-button">blue</button><br /><br />
          <button className="push-button green">green</button><br /><br />
          <button className="push-button yellow">yellow</button><br /><br />
          <button className="push-button orange">orange</button><br /><br />
          <button className="push-button red">red</button><br /><br />
          <button className="push-button pink">pink</button><br /><br />
          <button className="push-button purple">purple</button><br /><br /> */}
        </div>
        <div className="right-div">
          {/* <Switch /> */}

        </div>
        <br />
        <br /><br /><br /><br /><br /><br />
        <br /><br />

      </div>
    );
  }
}

export default App;
