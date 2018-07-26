import React, { Component } from 'react';
import Login from "../login/Login"
import Profile from '../profile/Profile';
export default class Navbar extends Component {


    // Handles whether Login or Logout is shown depending on if someone is logged in.
    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</a>
        } else {
            return <a className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler} href="#">Logout</a>
        }
    }
    // Event listener for Home button that pass props down back to the Homepage
    handleHome = () => {
        if (this.activeUser === null) {
            <Login showView={this.showView} />
        }
        else {
            this.props.viewHandler("HomePage")
        }
    }
    handleProfile = () => {
        this.props.viewHandler("profile")
    }




// Basic structure of NAVBAR
render() {
    return (
        <nav className="navbar is-fixed-top is-black" role="navigation">

            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io" onClick={this.props.viewHandler}>
                </a><div className="navbar-item is-size-3" ><p>Navbar!1!!!1!</p></div>
                <ul className="navbar-item">
                    <li className="nav-item">
                        <this.LoginLogout />
                    </li>
                </ul>
                <article className="navbar-item">
                    <section className="profileMenu__item">
                        <div><a onClick={this.handleHome}  id="nav__HomePage" href="#">Home</a></div>
                        <div><a onClick={this.handleProfile} href="#">Profile </a></div>
                    </section>
                </article>
            </div>
        </nav>
    )
}
}