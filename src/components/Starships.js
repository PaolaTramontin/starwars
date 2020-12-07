import React from 'react'
import { Route} from 'react-router-dom'

import {Link} from 'react-router-dom'



const Starships = (props) => {
  

    let shipInfo = props.location.state.ship
    return (
        <div>
            {/* <div >
                <span style = {{textAlign: "center", fontFamily: "Chalkduster, fantasy", color:"black"}}>Name:{shipInfo.name}</span> <br/>
                <span style = {{textAlign: "center", fontFamily: "Chalkduster, fantasy", color:"black"}}>Model:{shipInfo.model}</span>
            </div>
            <div className="card-action">
                <Link to={{pathname: "/"}}> RETURN</Link> 
            </div>      */}


<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Name: {shipInfo.name}</span>
          <span class="card-title">Name: {shipInfo.model}</span>
        </div>
        <div class="card-action">
        <Link to={{pathname: "/"}}> RETURN</Link> 
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Starships
