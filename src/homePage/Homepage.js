import React, { Component } from 'react';
import "../styles.css"
export default class HomePage extends Component {
    state = {
        user: null,
        username: null,
        pic: null,
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
                    this.setState({ pic: response.img })
                    this.props.setViewingUser(response)
                }

                )

        }
    }.bind(this)






picLoader =() => {
    if (this.props.activeUser == 1)
    return(
        <img src={require('../img/image1.jpg')} className="profileImage"/>
    )
}


    loaded = function () {
        if (this.state.user !== null) {
            return <div>
                <h2 className="welcomeTag">{`Welcome ${this.state.username}`}</h2>
                <picLoader/>
                
            </div>
        }
    }.bind(this)

    componentDidMount() {
        this.load()
    }

    render() {
        return (
            <div className="homeDiv">
            <this.picLoader/>
                {this.loaded()}
            </div>
        )
    }





}
