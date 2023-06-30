import React from "react"
import {useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation()
  //  console.log(location.state.name)
    return(
        <div>
            <h1>hi {location.state.name}</h1>
        </div>
    )
}

export default Home