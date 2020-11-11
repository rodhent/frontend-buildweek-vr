import React from 'react'
import '../../../styles/Developers.css'
import Navbar from '../../NavBar'



const DisplayDevelopers = (developers) => (  
  
  <div className='developers-container'>
  <Navbar />  
   <div className='dev-page'>
      <h3 className='page-title'>Meet the Developers</h3>
    <div className='display-cards'>
      
       {
          developers.map((developer, index) => {
            return(    
            
            
            <div key={index} className='devCard'>
              <img src={developer.pictureUrl} alt={`${developer.name}'s GitHub avatar`} className='card-img'/>
              <div  className='dev-info'>
                <h1 className='dev-name'>{developer.name}</h1>
                <h2 className='dev-handle'>GitHub Handle - {developer.gitID}</h2>
                <div className='github-logo-div'>
                  <img className='github-img' src='/images/GitHub-Mark-Light-32px.png' alt='GitHub Logo'></img>
                  <a href={developer.githubUrl} className='github-link'>  Checkout my GitHub Page</a>
                </div>
              </div>
            </div>
           
            )
          })
        }
    </div>
   </div>
  </div>

)

export default DisplayDevelopers
