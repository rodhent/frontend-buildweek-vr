import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import formSchema from './loginSchema';
import { useHistory } from 'react-router-dom';
import { login } from '../actions/index';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import '../styles/login.css'
import Navbar from './NavBar'

const initialValues = {
	username: '',
	password: ''
};
const initialErrors = {
	username: '',
	password: ''
};
const submitDisabled = true;

const LogIn = (props) => {
    const [user, setUser] = useState(initialValues);
    const [error, setError] = useState(initialErrors);
    const [disabled, setDisabled] = useState(submitDisabled);
    const history = useHistory()

    const submitHandler = event => {
        event.preventDefault();
        const newUser = {
            username: user.username,
            password: user.password,
            email: user.email,
        }
        props.login({newUser, history})
    
    }

    const setUserError = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)

            .then(() => setError({ ...error, [name]: '' }))
            .catch((err) => {
                setError({ ...error, [name]: err.errors[0] })
            })


    }


    const change = event => {
        const { name, value } = event.target
        setUserError(name, value)
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
            setDisabled(!valid)
        })
    }, [user])

    return (
        <>
        <Navbar />
        <div id='loginContainer'>
        <div className='formCont'>
          <form onSubmit={submitHandler} className='login-form'>
            <h3 className='login-title'>Login With SIXR</h3>
            <span className='login-span'>{error.username}</span>
            <label className='login-label'>
              <input
              className='login-input' 
              placeholder='Username or Email'
              name='username'
              type='text'
              onChange={change}
              value={user.username} />
            </label>
            <span className='login-span'>{error.password}</span>
            <label className='login-label'>
                          <input 
                              className='login-input'
                              placeholder='Password'
                              name='password'
                              type='password'
                              value={user.password}
                              onChange={change}
                          />
                      </label>
            <div>
                {error.username}
                {error.password}
            </div>
            <button id='submit' disabled={disabled}>Log In</button>
            <Link to='/sign-up' className='link'>Do you still need to sign up?</Link> 
          </form>
        </div>
      </div>
     </> 
    )
}
const mapStateToProps = (state) => {
    return{
        isLoading:state.isLoading
    }
}


export default connect(mapStateToProps, { login })(LogIn)
