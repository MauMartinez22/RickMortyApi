import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState({})
  const [dead, setDead] = useState(null)


  useEffect(() => {
    axios.get(url)
        .then((res) =>{
          setCharacter(res.data)
          
        })
    },[url])
    



  return (
    
      <div className="card">
        <img src={character.image}/>
        <hr></hr>
        <h1>{character.name}</h1>
        <h3>Origen:  </h3>
          <p className="info-content">{character.origin?.name}</p>
        <h3>Episodios:  </h3>
          <p className="info-content">{character.episode?.length}</p>
          <div className="status-section" >
              <h2>{character.status}</h2>
          </div>
      </div>
    
  )
}

export default ResidentInfo