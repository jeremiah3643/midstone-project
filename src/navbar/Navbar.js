import React, { Component } from 'react';

export default class Navbar extends Component {


LoginLogout = () => {
    if (this.props.activeUser === null)
    return(
        <a onClick={this.props.showView}>Login</a>
    )
    else {
        return (
            <a onClick={this.props.showView} >Logout</a>
        )
    }
}


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
                            <div><a onClick={this.handleHome} title="notifications" id="nav__homepage" href="#">Home</a></div>
                        </section>
                    </article>
                </div>
            </nav>
        )
    }

}