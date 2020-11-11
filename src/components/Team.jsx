import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Team = (props) => {
    const {data} = props
    const [team, setTeam] = useState([])
    
useEffect(() => {
    axios.get(`https://api.github.com/users/${data.gitid}`)
    .then(res => {
        console.log(res.data)
        setTeam(res.data)
    })
    .catch( (err) => {console.log(err)})
},[]) // eslint-disable-line react-hooks/exhaustive-deps
    
   
    return (
        <div className='member'>
            <img src={team.avatar_url} alt="Avatar"/> 
            <p>{`Name: ${data.name}`}</p>
              <p>{`Role: ${data.role}`}</p>
            <p>{`Github handle: ${team.login}`}</p>
        </div>
    )
}

export default Team