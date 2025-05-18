import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import myTrips from './data/myTrips'

function App() {
  const [count, setCount] = useState(0)

  console.log(">>> Shree")
  const entries = myTrips.map((trip) => {
    return (
      <Entry 
        key = {trip.id} // Required to address the warning in logs. Prop has to be 'key', a unique value.
        img = {trip.img}
        location = {trip.location}
        title = {trip.title}
        description = {trip.description}
        date = {trip.date}
        googleMapsUrl = {trip.googleMapsUrl}

        // Alternatively, use a spread operator (i.e {...trip}), or pass the entire object as a prop.
      />
    )
  })
  
  return (
    <>
      < Header />
      {entries}
    </>
  )
}

export default App
