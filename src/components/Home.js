// when you use an API you need to use useEffect
import React, {useEffect, useState} from 'react'
//import axios
import axios from 'axios'
//Link
import {Link} from 'react-router-dom'





const Home = () => {

    //initial state, which is empty
    const [starship, setStarship] = useState([])

    //API CALL BELOW. changes the intial state. The array now has 10 ships.
    useEffect(()=>{
        axios.get('https://swapi.dev/api/starships/')
          .then((response) =>{
              console.log(response.data.results)
            setStarship(response.data.results)
          })
        }, [])


//Map thru the 10 ships, give each ship an index, a state and a key
        const display = () => {
            return starship.map((ship, index) => (
                <div key={ship.name} className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">{ship.name}</span>
                    </div>
                    <div className="card-action">
                        {/* Give each ship, a href "link" that will go to that particular ships page */}
                        {/* if this is whats passing the state to the child, why arent we calling it ship inside the child? */}
                        <Link to={{pathname: `/Starships/${index}`, state:{ship} }} key={ship.name}> View Ship Info</Link> 
                    </div>
                  </div>
                </div>
              ))
            }
         

        return (
            <div className="container">
              <h2> Starships</h2>
              <div className="row">{starship.length>0?display():null}</div>
              {/* question mark means true, aka if the starship array has a length of greater than 1, run the display function */}
              {/* because we rendered the state inside the link, we dont need to render inside the return */}
                {/* <Starships starship={starship}/> */}
             </div>
          ) 
        }

export default Home
