import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LostPassword from "./LostPassword";
import LoginCreate from "./LoginCreate";
import Reset from "./Reset";
import { UserContext } from '../../UserContext';
import styles from "./Login.module.css";

const Login = () => {

  const { login } = useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes >
          <Route path="/" element={<LoginForm />}/>
          <Route path="criar" element={<LoginCreate />}/>
          <Route path="perdeu" element={<LostPassword />}/>
          <Route path="resetar" element={<Reset />}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login
