import React from 'react';
import {useHistory} from "react-router";

import {Input, Button, notification } from 'antd';
import axios from 'axios';

const Register = () =>{

    const history = useHistory();

    const handleSubmit = event =>{
        console.log('hola')
        event.preventDefault(); // Prevent the page from refreshing.
        const clientBody={
            name: event.target.name.value,
            surnames: event.target.surnames.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            password: event.target.password.value
        };
        axios.post('http://localhost:3001/client/register', clientBody)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Registered client.',description:'Succesfully registered client.'})
            
            setTimeout(() => {
                history.push("/")
            }, 1500);
        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Registration error.', description: 'There was an error trying to register the client.' })
        })
    }

    return (
        <form className="register-form" onSubmit={ handleSubmit}>

        <Input type="name" name="name" required placeholder="Write your name" />
        <Input type="surnames" name="surnames" required placeholder="Write your surnames" />
        <Input type="phone" name="phone" required placeholder="Write your phone" />
        <Input type="email" name="email" required placeholder="Write your email" />
        <Input type="password" name="password" required placeholder="Write your password" />

        <Button type="primary" htmlType="submit">Sign up</Button>

    </form>
)
}

export default Register;