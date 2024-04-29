import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Card, Flex, Typography, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import signUpImage from '../assets/images/signin.avif'
import UserService from "../services/UserService";


const SignIn = () => {
  console.log("Submit")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  
  const handelLogin = async (e) => {
    console.log(e);
    e.preventDefault();
    try {
      const userData = await UserService.signin(username, password)
      console.log(userData)
      if (userData.token) {
        localStorage.setItem('token', userData.token)
        localStorage.setItem('refreshToken', userData.refreshToken)
        navigate('/signupCenter')
      } else {
        setError(userData.message)
      }

    } catch (error) {
      console.log(error)
      setError(error.message)
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  }

  return (
    <Card className='form-container'>
      <Flex gap='large' >
        <Flex flex={1}>
          <img src={signUpImage} className='auth-image' />
        </Flex>
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className='title'>
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className='slogan'>
            Unlock you world .
          </Typography.Text>
          {error && <p className="error-message">{error}</p>}
          <Form
            layout='vertical'
            onSubmit={handelLogin}
            autoComplete='off'
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Username!',
                }

              ]} >
              <Input size='large' placeholder="Enter your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
                placeholder="Re-enter your Email"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ backgroundColor: "#cbdbff" }}
                htmlType='submit'
                size='large'
                className='btn'
              >
               Sign In
              </Button>
            </Form.Item>
            <Form.Item>
              <Flex>
                <Link to='/signupCenter'>
                  <Button className='btn'>Sign up as a Center</Button>
                </Link>
                <Link to='/signupSeeker'>
                  <Button className='btn'>Sign up as a Seeker</Button>
                </Link>
              </Flex>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>

    </Card>
  )
}
export default SignIn ;
