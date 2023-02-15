import axios from 'axios';
import React from 'react';

const baseUrl = 'http://localhost:8080/auth';

const Login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data

}

export default {Login}