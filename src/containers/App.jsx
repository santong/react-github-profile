import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
import '../assets/styles.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="profile">
            <div className="avatar-wrapper">
              <img src={logo} alt="avatar" className="avatar"/>
              <p>
                <a>三筒</a>
                <a>http://santong.me</a>
              </p>
              <div className="info-wrapper">
                <div className="info-block">
                  <a className="info-title">Repositories</a>
                  <a className="info-content">16</a>
                </div>
                <div className="info-block">
                  <a className="info-title">Stars</a>
                  <a className="info-content">424</a>
                </div>
                <div className="info-block">
                  <a className="info-title">Fllowers</a>
                  <a className="info-content">3</a>
                </div>
                <div className="info-block">
                  <a className="info-title">Fllowing</a>
                  <a className="info-content">6</a>
                </div>
              </div>
             
            </div>
            <p className="section-title">Favorite Repos</p>
            <div className="repo-wrapper">
              <div className="repo">

              </div>
              <div className="repo">
                
              </div>
              <div className="repo">
                
              </div>

            </div>
          </div>
          <p className="section-title">The Github-Profile-Repo</p>
          <div className="repo-status">
            <div className="status-block">
              <a className="status-title">Commits</a>
              <a className="status-content">16</a>
            </div>
            <div className="status-block">
              <a className="status-title">Issues</a>
              <a className="status-content">424</a>
            </div>
            <div className="status-block">
              <a className="status-title">Releases</a>
              <a className="status-content">3</a>
            </div>
            <div className="status-block">
              <a className="status-title">Contributors</a>
              <a className="status-content">6</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
