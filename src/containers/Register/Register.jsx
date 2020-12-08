import React from 'react';
import {useHistory} from "react-router";
import './Register.scss';
import {Link} from 'react-router-dom';
import {Input, notification } from 'antd';
import axios from 'axios';

const Register = () =>{

    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault(); // Prevent the page from refreshing.
        const clientBody={
            name: event.target.name.value,
            surnames: event.target.surnames.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            password: event.target.password.value
        };
        axios.post(process.env.REACT_APP_BASE_URL + '/client/register', clientBody)
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
    <div className="register">
        <div className="headerIcon">
            <div className="iconTrust"></div>
        </div>
        <div className="headerRegister">
            <div className="buttonRegister">
                <Link to='/' className='linkBack'>Back</Link>
            </div>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
        <Input type="name" name="name" required placeholder="Write your name" />
        <Input type="surnames" name="surnames" required placeholder="Write your surnames" />
        <Input type="phone" name="phone" required placeholder="Write your phone" />
        <Input type="email" name="email" required placeholder="Write your email" />
        <Input type="password" name="password" required placeholder="Write your password" />
        <button className='buttonRegister' type="primary" htmlType="submit">Sign up</ button>
        </form>
        <div className="phrase3">Thank you for trusting us</div>
    </div>
)
}

export default Register;