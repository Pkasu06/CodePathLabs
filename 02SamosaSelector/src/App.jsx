import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  const updateCount = () => {
    setCount(count + multiplier)
  }

  const buyDoubleStuffed = () => {
    if(count >= 10) {
      setMultiplier((prev) => prev*2);
      setCount((count) => count - 10)
    }
  }

  const buyPartyPack = () => {
    if(count >= 100) {
      setMultiplier((prev) => prev*5);
      setCount((count) => count - 100)
    }
  }

  const buyFullFeast = () => {
    if(count >= 1000) {
      setMultiplier((prev) => prev*10);
      setCount((count) => count - 1000)
    }
  }

  return (
    <div className='app'>
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <button onClick={updateCount}><img src='https://helpful-griffin-0a0ba5.netlify.app/samosa.png' /></button>
      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App
