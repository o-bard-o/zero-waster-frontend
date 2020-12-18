import React from "react";
import styled from "styled-components";
import axios from 'axios';

class login extends React.Component{

    constructor(props) {
        super(props);
    }

    loginAPITest = () => {
        window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?' +
            'response_type=code&' +
            'client_id=1655387804&' +
            'redirect_uri=http://localhost:3030/auth/callback&' +
            'state=12345abcde&' +
            'scope=profile%20openid';
    }


    render() {
        return (
            <div onClick={this.loginAPITest}>
                Test
            </div>
        )
    }
}

export default login
