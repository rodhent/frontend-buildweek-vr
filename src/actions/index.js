import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'


//login

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = (action) => (dispatch) =>{
    dispatch({type:LOGIN_START})
    console.log(action)
    return axiosWithAuth()
    .post('https://kick-starter-clone.herokuapp.com/api/auth/login', action.newUser)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
        action.history.push('/dashboard')
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: LOGIN_FAILURE, payload: err.message})
    })
}


// signup

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signup = (user) => (dispatch) => {
    dispatch({type: SIGNUP_START})
    return axios
    .post('https://kick-starter-clone.herokuapp.com/api/auth/register', user)
    .then((res) => {
        dispatch({type: SIGNUP_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: SIGNUP_FAILURE, payload: err.message})
    })
}

// add project

export const ADD_PROJECT_START = 'ADD_PROJECT_START'
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE'

export const addProj = (project) => (dispatch) => {
    dispatch({type: ADD_PROJECT_START})
    console.log(project)
    return axiosWithAuth()
    .post('https://kick-starter-clone.herokuapp.com/api/projects/add', project)
    .then((res) => {
        dispatch({type: ADD_PROJECT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: ADD_PROJECT_FAILURE, payload: err.message})
    })
}

// fetch project

export const FETCH_PROJECT_START = 'FETCH_PROJECT_START'
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS'
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE'

export const fetchProjects = () => (dispatch) => {
    dispatch({type: FETCH_PROJECT_START})
    return axiosWithAuth()
    .get('https://kick-starter-clone.herokuapp.com/api/projects')
    .then((res) => {
        dispatch({type: FETCH_PROJECT_SUCCESS, payload: res.data.data})
    })
    .catch((err) => {
        dispatch({type: FETCH_PROJECT_FAILURE, payload: err.message})
    })
}

// fetch project by id

export const FETCH_PROJECT_ID_START = 'FETCH_PROJECT_ID_START'
export const FETCH_PROJECT_ID_SUCCESS = 'FETCH_PROJECT_ID_SUCCESS'
export const FETCH_PROJECT_ID_FAILURE = 'FETCH_PROJECT_ID_FAILURE'

export const fetchProjectID = (id) => (dispatch) => {
    dispatch({type: FETCH_PROJECT_ID_START})
    return axiosWithAuth()
    .get(`https://kick-starter-clone.herokuapp.com/api/projects/${id}`)
    .then((res) => {
        dispatch({type: FETCH_PROJECT_ID_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: FETCH_PROJECT_ID_FAILURE, payload: err.message})
    })
}

// edit project by id

export const EDIT_PROJECT_START = 'EDIT_PROJECT_START'
export const EDIT_PROJECT_SUCCESS = 'EDIT_PROJECT_SUCCESS'
export const EDIT_PROJECT_FAILURE = 'EDIT_PROJECT_FAILURE'

export const editProject = (project) => (dispatch) => {
    dispatch({type: EDIT_PROJECT_START})
    return axiosWithAuth()
    .put(`https://kick-starter-clone.herokuapp.com/api/projects/${project.id}`, project)
    .then((res) => {
        dispatch({type: EDIT_PROJECT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: EDIT_PROJECT_FAILURE, payload: err.message})
    })
}