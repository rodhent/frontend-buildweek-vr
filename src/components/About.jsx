import React from 'react'
import '../styles/About.css'
import {Link} from 'react-router-dom'
import '../styles/Button.css'
import Team from './Team'
import Navbar from './NavBar'
const About = () => {
    const users = [{gitid: 'aprilissy', name: 'April Darger', role: 'React Team 1'}, 
                    {gitid: 'davidgoldcode', name: 'David Gold', role: 'Back-end'},  
                    {gitid: 'rodhent', name: 'Rod Hentringer', role: 'React Team 2'},  
                    {gitid: 'benaiah-varner', name: 'Benaiah Varner', role: 'React Team 1'}]

    return (
        <>
        <Navbar />
        <div className='aboutPage'>
            <div className='background'>
                <div className='header'>
                    <h1>About <span>SIXR <i class="fab fa-typo3 fa-10x"></i></span></h1>
                </div>
            </div>
                <div className='about'>
                    <span>OUR STORY</span>
                    <p>
                    SIXR is a tech non profit organization based in Seattle. We help underrepresented groups who wouldn’t otherwise have access to technology. One example is helping minorities build virtual reality experiences to tell their story, building empathy and understanding. We work primarily with underrepresented groups who wouldn’t otherwise have access to this kind of technology. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed provident eum dicta nobis soluta asperiores beatae, deleniti deserunt, totam distinctio, temporibus praesentium labore eos. Et maiores dolorum mollitia! Necessitatibus, modi!</p>
                </div>
            
            
            <div className='steps'>
                <div>
                    <h2>1</h2>
                    <h4>Start your campaign</h4>
                    <ul>
                        <li>Set your fundraiser goal</li>
                        <li>Tell your story</li>
                        <li>Add a picture or video</li>
                    </ul>
                </div>
                <div>
                    <h2>2</h2>
                    <h4>Share with friends</h4>
                    <ul>
                        <li>Send emails</li>
                        <li>Send text messages</li>
                        <li>Share on social media</li>
                    </ul>
                </div>
                <div>
                    <h2>3</h2>
                    <h4>Manage donations</h4>
                    <ul>
                        <li>Accept donations</li>
                        <li>Thank donors</li>
                        <li>Withdraw funds</li>
                    </ul>
                </div>
            </div>
            <div className='start'>
                <Link to='/sign-up'><button className='aboutBtn'>Get Started</button></Link>
            </div>
            
            <div className='promo'>
                <h1>Meet Our Team</h1>
                <div className='team'>
                {
                    users.map((item, index) => {
                        return <Team data={item} key={index} />
                    })
                }                    
                </div>
            </div>
            <div className='journey'>
                <h2 className='journeyH2'>Join the journey from idea to market </h2>
                    <div className='timeline'>
                        <i class="far fa-lightbulb fa-5x"></i><i class="fas fa-long-arrow-alt-right fa-5x"></i><i class="fas fa-wrench fa-5x"></i><i class="fas fa-long-arrow-alt-right fa-5x"></i>
                        <i class="fas fa-truck-moving fa-5x"></i>
                    </div>
                    <div className='journeyP'>
                        <p>With SIXR, you have the opportunity to support entrepreneurs and new technology from the earliest stages of development. Be sure to evaluate every campaign closely and contribute at a level you can afford in the event that the team is unable to complete the project as planned.</p>
                        <p>Browse campaigns, read the stories from the entrepreneurs themselves, evaluate the stage of development and any potential production risks — and then fund the projects that you want to help succeed.</p>
                    </div>
                    
            </div>
            <div className='explore'>
                <div className='ready'>
                <i class="fas fa-vr-cardboard fa-5x"></i>
                    <h3>Ready? Explore</h3>
                    <Link to='/'><button className='abBtn'>Discover Products</button></Link>
                </div>
                <div class='inspired'>
                <i class="fas fa-brain fa-5x"></i>
                    <h3>Feeling Insipred?</h3>
                    <Link to='/sign-up'><button className='abBtn'>Become an Entreprenuer</button></Link>
                </div>
            </div>
        </div>
       </> 
    )
}

export default About