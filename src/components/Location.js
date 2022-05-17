import axios from 'axios';
import React, { useEffect, useState} from 'react';
import ResidentInfo from './ResidentInfo.js';


const Location = () => {

    const [api , SetApi] = useState({})
    const position = Math.floor(Math.random()* 116) +1
    const [id, setId] = useState("")

   

    useEffect (() =>{
                axios.get(`https://rickandmortyapi.com/api/location/${position}`)
                .then (res => {SetApi(res.data)
                })
            },[])
            
            const searchByID = () => {
                axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                    .then(res => {SetApi(res.data)
                        setId("")
                    })
            }

            console.log(api)



            
      

    
    return (
        <div>
           
            <div className='banner'>
                         
                <div className='input'>
                    <input type="text" onChange={e => setId(e.target.value)} value={id} placeholder="Search World by ID"/>
                    <button onClick={searchByID}> search</button>
                </div>
            </div>
            <div className='planet-section'>             
                <h1>{api.name}</h1>
                <div className='row-content'>
                    <div className='planet-info'>
                        <h2>Dimension: </h2>
                        <p>{api.dimension}</p>
                    </div>
                    <div className='planet-info'>
                        <h2>Type: </h2>
                        <p>{api.type}</p>
                    </div>
                    
                    <div className='planet-info'>
                        <h2> Residents: </h2>
                        <p>{api.residents?.length}</p>     
                    </div>
                    
                   
                </div>
            </div>    

                
            <div className='body'>
                <div className='card-content'>
                    {api.residents?.map((resident) => (
                    <ResidentInfo url={resident} key={api.resident} />
                    ))}       
                </div>
               
            </div>

        </div>
   
    );
};

export default Location;