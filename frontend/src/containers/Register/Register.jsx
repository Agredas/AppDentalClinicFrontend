import React, {useState} from 'react';
import {useHistory} from "react-router";

import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 7,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 11,
        span: 8,
    },
};


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
        axios.post('http://localhost:3001/client/register', clientBody)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Registered client.',description:'Succesfully registered client.'})
            
            setTimeout(() => {
                history.push("/")
            }, 1500);
        }).catch(error => {
            notification.error({ message: 'Registration error.', description: 'There was an error trying to register the client.' })
        })
    }

    return (
      <Form onSubmit={handleSubmit}
              {...layout}
              name="basic"
              initialValues={{
                  remember: true,
              }}
          >
              <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                      {
                          required: true,
                          message: 'Please, enter your name.',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  label="Surnames"
                  name="surnames"
                  rules={[
                      {
                          required: true,
                          message: 'Please, enter your surnames.',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                      {
                          required: true,
                          message: 'Please, enter your phone number.',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please, enter your email.',
                      },
                      {
                        type:'email',
                        pattern:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
                        message: 'Your email must contain @ and finish with .com or .es.',
                    }
                  ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                      {
                          required: true,
                          message: 'Please, enter your password.',
                      },
                      {
                          pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 
                          message: 'Your password must contain at least one lower case, one upper case, one number, one special character, and must be between 8 and 10 characters long!',
                      }
                  ]}
              >
                  <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                  <Button>Submit</Button>
              </Form.Item>
          </Form>
          
    )
}

export default Register;