import * as yup from 'yup';

export default yup.object().shape({
  username: yup
    .string()
    .required('Enter a username with 6+ characters or a valid email to login')
    .min(6, 'Username must have 6 or more characters or email must be valid'),
  password: yup
    .string()
    .required('Enter a valid password to login (8 characters)')
    .min(8, 'Password must have 8 or more characters'),
});