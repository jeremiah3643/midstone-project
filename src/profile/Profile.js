import React, { Component } from 'react';
import "./profileStyles.css"
export default class Profile extends Component {





    picLoader = () => {
        if (this.props.activeUser == 1)
            return (
                <img src={require('../img/image1.jpg')} className="profileImage" />
            )
    }





    render() {
        return (
            <div>
                <this.picLoader />
                <p>HELLO!!!! THIS IS THE PROFILE PAGE!</p>


            </div>
        )
    }
}