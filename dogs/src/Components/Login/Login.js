import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LostPassword from "./LostPassword";
import LoginCreate from "./LoginCreate";
import Reset from "./Reset";

const Login = () => {
  return (
    <div>
        <Routes >
          <Route path="/" element={<LoginForm />}/>
          <Route path="criar" element={<LoginCreate />}/>
          <Route path="perdeu" element={<LostPassword />}/>
          <Route path="resetar" element={<Reset />}/>
        </Routes>
    </div>
  )
}

export default Login
