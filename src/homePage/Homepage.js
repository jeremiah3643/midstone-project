import React, { Component } from 'react';


export default class HomePage extends Component {
    state = {
        user: null,
        username: null
    }

    load = function () {
        if (this.props.activeUser === null) {
            this.setState = { currentView: "Login" }
        }
        else {
            sessionStorage.getItem("userId")
            fetch(`http://localhost:8088/users/${this.props.activeUser}`)
                .then(r => r.json()).then(response => {
                    this.setState({ user: response })
                    this.setState({ username: response.username })
                    this.props.setViewingUser(response)
                }

                )

        }
    }.bind(this)


   

    loaded = function () {
        if (this.state.user !== null) {
            return <div>
                <h2 className="welcomeTag">{`Welcome ${this.state.username}`}</h2>
            </div>
        }
    }.bind(this)

    componentDidMount() {
        this.load()
    }

    render() {
        return (
            <div className="homeDiv">
                {this.loaded()}



            </div>
        )
    }





}
