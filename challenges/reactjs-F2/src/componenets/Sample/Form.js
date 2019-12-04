import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value;
        })
    }
}