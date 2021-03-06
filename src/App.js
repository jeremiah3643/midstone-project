import React, { Component } from 'react';
import Login from "./login/Login";
import Register from "./register/Register";
import HomePage from './homePage/Homepage';
import Navbar from "./navbar/Navbar";
import Profile from './profile/Profile';

export default class App extends Component {
  // Sets initial state. Some values are uselessin APP but get sent down to other components.
  state = {
    currentView: "login",
    searchTerms: "",
    activeUser: sessionStorage.getItem("userId"),
    viewingUser: "",
    user: "",
    newEmail: "",
    newPassword: ""
  }
// Function that takes sessionStorage and converts it into activeUser State.
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
  
// not quite functional yet. Need more work on forum for this to work.
  setViewingUser = function (val) {
    this.setState({
      viewingUser: val
    })
  }.bind(this)

  //Written not quite sure how this function works as I did not write it.....but takes HTML Ids and converts it into the View function
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
      this.setViewingUser(null);
    }

    // Update state to correct view will be rendered
    this.setState({
      currentView: view
    });
  }.bind(this);

  // This function handles all the logic for which pages get shown and passes down important states and functions for different pages.
  View = () => {
    if (this.state.currentView === "register") {
      return (
        <Register showView={this.showView} setActiveUser={this.setActiveUser} newEmail={this.state.newEmail} newPassword={this.state.newPassword}  />
      )
    }
    else if (sessionStorage.getItem("userId") === null) {
      return (
        <Login showView={this.showView} setActiveUser={this.setActiveUser} activeUser={this.state.activeUser} newEmail={this.state.newEmail} newPassword={this.state.newPassword} />
      )
    }
    else {
      switch (this.state.currentView) {
        case "register":
          return (
            <Register showView={this.showView} setActiveUser={this.setActiveUser}  />
          )

        case "login":
          if (sessionStorage.getItem("userId") === null) {
            return (
              <Login showView={this.showView} setActiveUser={this.setActiveUser} />
            )
          }    
        case "HomePage":
          return (
            <HomePage showView={this.showView} activeUser={this.state.activeUser} currentView={this.state.currentView} setViewingUser={this.setViewingUser} />
          )
       case "profile":
       return(
         <Profile showView={this.showView} activeUser={this.state.activeUser} currentView = {this.state.currentView} viewingUser={this.state.viewingUser}/>
       )
        default:
      }
    }
  }





// Displays JSX onto the DOM
  render() {
    return (
      <div className="App">
      <Navbar 
      viewHandler={this.showView}
      activeUser={this.state.activeUser}
      />
        {this.View()}

      </div>
    );
  }
}


