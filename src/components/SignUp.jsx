import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import formSchema from './formSchema'
import { useHistory } from 'react-router-dom'
import { signup } from '../actions/index'
import { connect } from 'react-redux'
import Navbar from './NavBar'
import '../styles/signUp.css'

 
const SignUp = ({ signup }) => {
    const [ user, setUser ] = useState({username: '', email: '', password: ''})
    const [ error, setError ] = useState({username: '', email: '', password: ''})
    const [ disabled, setDisabled ] = useState(true)

    const history = useHistory()

    const submitHandler = event => {
        event.preventDefault();
        const newUser = {
            username: user.username,
            password: user.password,
            email: user.email,
        }
        signup(newUser)
        history.push('/login')
   
    }
    const setUserError = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)

        .then(() => setError({...error, [name]: '' }))
        .catch((err) => {
            setError({...error, [name]: err.errors[0] })})


    }


    const change = event => {
        const { name, value } = event.target
        setUserError(name, value)
        setUser({...user, [name]: value})
    }

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
            setDisabled(!valid)
        })
    }, [user])

    return (   
    <> 
    <Navbar />   
    <div className='formCont'>
        <form onSubmit={submitHandler} className='signup-form'>
            <h3 className='signup-h3'>Sign Up With SIXR</h3>
            <span className='signup-span'>{error.username}</span>
                <label className='signup-label'>{/* USERNAME*/}
                    <input 
                    className='signUp-input' 
                    type='text'
                    name='username'
                    placeholder='Create a Username'
                    value={user.username}
                    onChange={change}
                    />  
                </label>
                <label className='signup-label'>{/* CONFIRM PASSWORD*/}
                    <input 
                    className='signUp-input' 
                    type='Email'
                    name='email'
                    placeholder='Enter Email address'
                    value={user.email}
                    onChange={change}
                    />
                </label>
            <span className='signup-span'>{error.password}</span>
                <label className='signup-label'> {/* PASSWORD*/}
                   <input 
                    className='signUp-input'
                    type='password'
                    name='password'
                    placeholder='Create a Password'
                    value={user.password}
                    onChange={change}
                    />
                </label>
            <span className='signup-span'>{error.confirmPassword}</span>
            <div>
                {error.username}
                {error.password}
            </div>
                <button id='submit' disabled={disabled}>Sign Up</button>
                
        </form>
    </div> 
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, { signup })(SignUp)
