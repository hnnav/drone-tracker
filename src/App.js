import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  // Fetch all drones on 500m area
  useEffect(() => {
    axios.get('http://localhost:8080/')
    // .then(res => {setItems(res.data)})
    .then(res => console.log(res.data))
    .catch((error) => console.log(error))
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
