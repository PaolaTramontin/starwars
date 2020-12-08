import React from 'react'

import {Link} from 'react-router-dom'


//how does props get passsed down? we never render it inside home
const Starships = (location) => {
    console.log(location)
    //the location below comes from the app.js and the current state comes from the link from home.js
    let shipInfo = location.location.state.ship

    return (
        <div>
            <div class="row">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">Name: {shipInfo.name}</span>
                    <span class="card-title">Model: {shipInfo.model}</span>
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

