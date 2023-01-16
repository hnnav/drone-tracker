import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [user, setUser] = useState('')

  // Fetch user
  useEffect(() => {
    fetch('https://assignments.reaktor.com/birdnest/drones', {
    headers: {'Access-Control-Allow-Origin': '*'}
        })
    .then(response => response.text())
    .then(text => console.log(text))
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
