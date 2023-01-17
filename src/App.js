import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  // All drones on 500m area
  const [allDrones, setAllDrones] = useState([])
  
  useEffect(() => {
    const interval = setInterval(() => {
      loadData();
      }, 3000);
      return () => clearInterval(interval);
    }, []);

  function loadData() {
    axios.get('http://localhost:8080/')
    .then(res => setAllDrones(res.data.report.capture[0].drone))
    .catch((error) => console.log(error))
  }
  
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

  // Find drones closer than 100m to the nest
  const [violatingDrones, setViolatingDrones] = useState([])
  
  useEffect(() => {
    setViolatingDrones(allDrones.filter(drone => inProhibitedArea(Number(drone.positionX), Number(drone.positionY))))
  }, [allDrones])


  return (
    <div className="App">
      <h1>BIRDNEST - Drone Tracker</h1>
      <h2>Perimeter violations</h2>

      {/* If drones in prohibited zone */}
      {(violatingDrones.length > 0) && violatingDrones.map(drone => <p key={drone.serialNumber.toString()}>Serial Number: {drone.serialNumber.toString()}</p>
      )}

      {/* If no drones in prohibited zone */}
      {(violatingDrones.length === 0) && <p>No area violations at the moment!</p>}
    </div>
  );
}

export default App;
