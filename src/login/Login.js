import React, { Component } from 'react';
import App from "../App";
import Register from "../register/Register";



export default class Login extends Component {
    constructor(props) {
        //initial state for email and password fields. Going to Nix the else Statement.
        super(props)
        if (this.props.activeUser === null) {
            this.state = {
                email: "",
                password: ""
            }
        } else {
            this.state = {
                email: this.props.newEmail,
                password: this.props.newPassword
            }
        }
    }
    //event listener that captures input in the login fields.
    handleFieldChange = function (evt) {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }.bind(this);
//event listener for login button.......checks the server to see if user exists
    handleLogin = function (e) {
        e.preventDefault();

        fetch(
            `http://localhost:8088/users?email=${this.state.email}&password=${this.state.password}`
        )
            .then(r => r.json())
            .then(user => {
                // User exists. Set state and session storage, and show home view
                if (user.length) {
                    this.props.setActiveUser(user[0].id);
                    this.props.showView("HomePage");


                    // User doesn't exist
                } else {
                    alert("Email and Password Do Not Match Our Records.");
                }
            });
    }.bind(this);
//button click that takes you to the register page
    registerButtonClick = () => {
        this.props.showView("register");
    };

    render() {
        return (
            <div className="login-div field">
                <form className="container" >
                    <h1 className="notification">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">
                        User Name
          </label>
                    <input
                        onChange={this.handleFieldChange}
                        defaultValue={this.props.newEmail}
                        placeholder="Email"
                        type="email"
                        id="email"
                        className="form-control input is-normal"
                        required=""
                        autoFocus=""
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Password
          </label>
                    <input
                        onChange={this.handleFieldChange}
                        type="password"
                        id="password"
                        className="form-control input is-normal"
                        defaultValue={this.props.newPassword}
                        placeholder="Password"
                        required=""
                    />

                    <button className="button is-primary is-outlined" type="submit" onClick={this.handleLogin}>
                        Sign in
          </button>

                    <button
                        id="login__register"
                        className="button is-primary is-outlined"
                        onClick={this.registerButtonClick}
                    >
                        Register
          </button>
                    <p className="">© 2017-2018</p>
                </form>
            </div>
        );
    }
}