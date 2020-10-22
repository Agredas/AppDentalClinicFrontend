import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Register = () =>{

  const onFinish = (client) => {
    axios.post('http://localhost:3001/client/register', client)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Registered client.',description:'Succesfully registered client.'})
        }).catch(error => {
            notification.error({ message: 'Registration error.', description: 'There was an error trying to register the client.' })
        })
};

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
      <Form
              {...layout}
              name="basic"
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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
                        message: 'The field must be an email.',
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
                  <Button type="primary" htmlType="submit">
                      Submit
          </Button>
              </Form.Item>
          </Form>
    )
}

export default Register;