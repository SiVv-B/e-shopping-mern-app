import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../redux/Actions/AuthAction'
import styled from 'styled-components'
import mobile from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  })

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(register(user, navigate))
    setUser({
      name: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
    })
    console.log('from signin onSubmit the user has been registred')
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="name"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={user.name}
          />
          <Input
            placeholder="last name"
            type="text"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            value={user.lastname}
          />
          <Input
            placeholder="username"
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={user.username}
          />
          <Input
            placeholder="email"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={user.email}
          />
          <Input placeholder="password"
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={user.password}
          />
          <Input placeholder="confirm password"
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            onChange={handleChange}
            value={user.confirmpassword}
             />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
