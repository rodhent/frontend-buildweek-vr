import { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayDevelopers from './Developers.jsx'

const team = [
  {name:'David Gold',
   gitID:'davidgoldcode'},
  {name:'Rod Hentringer',
   gitID:'rodhent'},
  {name:'Benaiah Varner',
   gitID:'benaiah-varner'},
  {name:'April Ashby',
   gitID:'aprilissy'}
]

const Developers = () => {
  const[developers, setDevelopers] = useState(team)

  useEffect(() => {
    const thing = async function(){
      const temp = [...developers]
      for(let i = 0; i < developers.length; i++){
        const {data} = await axios.get(`https://api.github.com/users/${developers[i].gitID}`)
        //console.log(data)
        temp[i].pictureUrl = data.avatar_url
        temp[i].githubUrl = data.html_url
      }
      setDevelopers(temp)
    }
    thing()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps
  
   return DisplayDevelopers(developers) 
}

export default Developers
