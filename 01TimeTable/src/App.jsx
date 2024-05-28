import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Itinerary for 7 days in Chicago</h1>
      <h4>Welcome to Chicago, Natalia!. Checkout this calendar to get to know more about the city and see all the sight during your stay</h4>
      <Calendar />
    </div>
  )
}

export default App
