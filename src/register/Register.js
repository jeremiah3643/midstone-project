import React, { Component } from 'react';
import App from "../App";

function validate(email, password) {
    // true means invalid, so our conditions got reversed
    return {
      email: email.length === 0,
      password: password.length === 0,
    };
  }

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            password: "",
            username: "",
            email: "",
        };
    }

    firstnameChange(event) {
        this.setState({ firstname: event.target.value }).bind(this);
    }
    lastnameChange(event) {
        this.setState({ lastname: event.target.value }).bind(this);
    }
    passwordChange(event) {
        this.setState({ password: event.target.value }).bind(this);
    }
    emailChange(event) {
        this.setState({ email: event.target.value }).bind(this);
    }
    usernameChange(event) {
        this.setState({ username: event.target.value }.bind(this))
    }
    handleSubmit(event) {
        const { email, password } = this.state;
        alert("You Have Successfully Signed Up , Please Log In");
      
        // Prevent form from clearing every time submitted
        event.preventDefault();
    
        // Store submitted values into variables
        const submittedFirstname = this.state.firstname;
        const submittedLastname = this.state.lastname;
        const submittedEmail = this.state.email;
        const submittedPassword = this.state.password;
        const submittedUsername = this.state.username;
    
    
        fetch(`http://localhost:8088/users?email=${submittedEmail}`)
          // Must be explicit on how to parse the response
          .then(r => r.json())
    
          // JSON parsed data comes to this then()
          .then(user => {
            // Convert user to string to get undefined if empty (instead of empty array)
            if (user.toString()) {
              alert("User Name Already In Use")
    
              // if doesn't exist, add to user db and forward to login page, passing email/password
            }
            else if (this.state === null) {
              alert("Please fill out remaining boxes.")
            }
    
    
            else {
              fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  first: submittedFirstname,
                  last: submittedLastname,
                  email: submittedEmail,
                  password: submittedPassword,
                  username: submittedUsername,
    
                })
              });
              this.props.setUsernamePassword(submittedUsername, submittedPassword)
              this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                username: '',
    
              });
              this.props.showView("login")
            }
          });
      }
    


    render() {
        return (
            <div>
                <form>
                    <h1>Please Register</h1>
                    <input className="input"
                        placeholder="First Name"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.firstnameChange}
                    />
                    <input className="input"
                        placeholder="Last Nane"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.lastnameChange}
                    />
                    <input className="input"
                        placeholder="Email"
                        type="email"
                        value={this.state.email}
                        onChange={this.emailChange}
                    />
                    <input className="input"
                        placeholder="Username"
                        type="text"
                        value={this.state.username}
                        onChange={this.usernameChange}
                    />
                    <input className="input"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.passwordChange}
                    />
                    <button type="submit" text="Submit" className="button is-primary">
                        Submit</button>

                </form>
            </div>
        )
    }
}