import React, { Component } from 'react';
import Login from "./login/Login";
import Register from "./register/Register";

export default class App extends Component {
  state = {
    currentView: "login",
    searchTerms: "",
    activeUser: sessionStorage.getItem("userId"),
    viewingUser: "",
    user: ""
  }

  setActiveUser = val => {
    if (val) {
      sessionStorage.setItem("userId", val);
      this.setState({
        activeUser: val
      })
    } else {
      sessionStorage.removeItem("userId");
      this.setState({
        activeUser: null
      })
    }
  }

    
    setViewingUser = function (val) {
        this.setState({
            viewingUser: val
        })
    }.bind(this)

  showView = function (e) {
    let view = null;

    // Click event triggered switching view
    if (e.hasOwnProperty("target")) {
      view = e.target.id.split("__")[1];

      // View switch manually triggered by passing in string
    } else {
      view = e;
    }
    if (view === "logout") {
      this.setActiveUser(null);
    }

    // Update state to correct view will be rendered
    this.setState({
      currentView: view
    });
  }.bind(this);

  View = () => {
    if (this.state.currentView === "register") {
      return (
        <register showView={this.showView} setActiveUser={this.setActiveUser} newEmail={this.state.newEmail} newPassword={this.state.newPassword} />
      )
    }
    else if  (sessionStorage.getItem("userId") === null) {
        return (
          <Login showView={this.showView} setActiveUser={this.setActiveUser} newEmail={this.state.newEmail} newPassword={this.state.newPassword} />
        )
    }
    else {
    switch (this.state.currentView) {
      case "register":
        return (
          <Register showView={this.showView} setActiveUser={this.setActiveUser} setUsernamePassword={this.setUsernamePassword} />
        )
      case "login":
        if (sessionStorage.getItem("userId") === null) {
          return (
            <Login showView={this.showView} setActiveUser={this.setActiveUser} newEmail={this.state.newEmail} newPassword={this.state.newPassword} />
          )
        }}}}
    
  
  



  render() {
    return (
      <div className="App">
        {this.View()}

      </div>
    );
  }
}


