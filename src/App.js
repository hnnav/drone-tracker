import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [user, setUser] = useState('')

  // Fetch all drones on 500m area
  useEffect(() => {
    fetch('https://assignments.reaktor.com/birdnest/drones',{
      method: "GET",
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }})
    .then(response => console.log(response))
    // .catch((error) => console.log(error))

  }, [])

  return (
    <div className="App">
      <h1>BIRDNEST - Drone Tracker</h1>
      <h2>Perimeter violations</h2>
      {/* map violating pilots here */}
    </div>
  );
}

export default App;
