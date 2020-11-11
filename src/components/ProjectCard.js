import React from 'react'
import { Button } from './Button'
import '../styles/Project.css'

const ProjectCard = () => {
    return (
    <div className="project-card">
        <div className='card1'>
        <h2>A Project</h2>
        <p>SIXR is a crowdfunding platform helping entrepreneurial ideas come to life.</p>
        </div>
        <Button buttonStyle='btn--project'>Get Started</Button>
        <div className="project-card">
        <h2>A Cause</h2>
        <p>SIXR is the world's largest and most trusted free social fundraising platform.</p>
        <Button buttonStyle='btn--project'>Get Started</Button>
    </div>
    </div>
    )
}

export default ProjectCard


