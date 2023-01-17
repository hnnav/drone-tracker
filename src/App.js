import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  // All drones on 500m area
  const [allDrones, setAllDrones] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8080/')
    .then(res => setAllDrones(res.data.report.capture[0].drone))
    .catch((error) => console.log(error))
  }, [allDrones])
  
  // Set time stamp
  const [timeStamp, setTimeStamp] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/')
    .then(res => setTimeStamp(res.data.report.capture[0].$.snapshotTimestamp))
    .catch((error) => console.log(error))
  }, [timeStamp])

  // Equation to see if drone is in prohibited area
  const inProhibitedArea = (x, y) => {
    if (Math.sqrt((x - 250000)**2 + (y - 250000)**2) <= 100000) {
      return true
    } else {
      return false
    }
  }

  // Filter drones for violations
  const [violatingDrones, setViolatingDrones] = useState([])
  useEffect(() => {
    allDrones.map(drone => {
      inProhibitedArea(Number(drone.positionX), Number(drone.positionY)) && setViolatingDrones(drone)
    })
  }, [violatingDrones])

  return (
    <div className="App">
      <h1>BIRDNEST - Drone Tracker</h1>
      <h2>Perimeter violations</h2>
      {console.log(allDrones)}
    </div>
  );
}

export default App;
