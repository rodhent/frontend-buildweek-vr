import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(2, 'Must be atleast 2 characters'),
    password: yup.string().required('Password is required').min(8, 'Must be atleast 8 characters'),
    email: yup.string().required('Please enter a valid Email address')
})

export default schema