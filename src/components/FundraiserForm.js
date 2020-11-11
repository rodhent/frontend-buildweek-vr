import React, { useState } from 'react'
import { addProj } from '../actions/index'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../styles/FundraiserForm.css'

const FundraiserForm = ({ addProj, user_id}) => {

const history = useHistory()
const [formValues, setFormValues] = useState({
        title: '',
        funding_goal: '',
        fund_date: '',
        description: '',
        user_id: parseInt(localStorage.getItem('id')), 
        // total_funded: '',               
    })

const onSubmit = (e) => {
        e.preventDefault()
        addProj(formValues)
        history.push('/dashboard')
    }

const handleChange = (e) => {
setFormValues({ ...formValues, [e.target.name]: e.target.value })

}
    return (
        <div id='fundContainer'>
        <div className="fund-section">
            <form onSubmit={onSubmit} className='fund-form'>
            <h3 className='form-title'>Please fill out the information below.</h3>
                <label className='fund-label' >  
                    <input
                    className='fund-input'
                    onChange={handleChange}
                    type='text'
                    name='title'
                    value={formValues.title}
                    placeholder='Project Name'/>
                </label>
                <label className='fund-label' >
                    <input
                    className='fund-input'
                    onChange={handleChange}
                    type='number'
                    name='funding_goal'
                    value={formValues.funding_goal}
                    placeholder='$ Financial goal?'/>
                </label> 
                <label className='fund-label' >  
                <input
                    className='fund-input'
                    onChange={handleChange}
                    type='text'
                    id="FromDate"
                    name='fund_date'
                    value={formValues.fund_date}
                    placeholder='Goal date? YYYY-MM-DD'/>
                </label> 
                {/* <label className='fund-label' >
                <input
                    className='fund-input'
                    onChange={handleChange}
                    type='number'
                    name='total_funded'
                    value={formValues.total_funded}
                    placeholder='What is your total funded?'/>
                </label>  */}
                <label className='fund-label' >      
                <input
                    className='fund-input'
                    onChange={handleChange}
                    type='text'
                    name='description'
                    value={formValues.description}
                    placeholder='Description of your project'>
                </input>
                </label>
                <div>
                <p className='fund-p'>Your answers will be locked for this campaign and can’t be changed later.</p>
                </div>
                <button id='submit'>Submit</button>
            </form>
        </div>
        </div> 
    )
}


const mapStateToProps = (state) => {
    return {
        user_id: state.user_id
     
    };
};


export default connect(mapStateToProps, { addProj })(FundraiserForm)
