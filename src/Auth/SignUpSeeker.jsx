import React from 'react'
import { Card, Flex, Typography, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import signUpImage from '../assets/images/signup.webp'

const SignUpSeeker = () => {
  const handelSignIn = (values) => {
    console.log(values);
  }
  return (
    <Card className='form-container'>
      <Flex>
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className='title'>
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className='slogan'>
            Join for exclusive access !
          </Typography.Text>
          <Form
            layout='vertical'
            onFinish={handelSignIn}
            autoComplete='off'
          >
            <Form.Item
              label="Username"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Username!',
                }

              ]} >
              <Input size='large' placeholder="Enter your Username" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Email!',
                },
                {
                  type: 'email',
                  message: 'The input is not valid email',
                },

              ]} >
              <Input size='large' placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Name"
              name="SeekerName"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Name!',
                },
              ]} >
              <Input size='large' placeholder="Enter your Name" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Password!',
                }

              ]} >
              <Input.Password
                size='large'
                placeholder="Re-enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordConfirmation"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Confirm Password!',
                }

              ]} >
              <Input.Password placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ backgroundColor: "#cbdbff" }}
                htmlType='submit'
                size='large'
                className='btn'
              >
                Create Account
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to='/signin'>
                <Button className='btn'>Sign In</Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        <Flex flex={1}>
          <img src={signUpImage} className='auth-image' />
        </Flex>
      </Flex>

    </Card>
  )
}
export default SignUpSeeker
