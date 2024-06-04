import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    'name': '',
    'cuisine': ''
  })

  const [restaraunts, setRestaraunts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setRestaraunts([...restaraunts, form]);
    setForm({
      "name": '',
      "cuisine": ''
    })
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label><br/>
      <input type='text' name="name" id='name' value={form.name} onChange={handleChange}/><br/>
      <label for="cuisine">Cuisine</label><br/>
      <input type='text' name="cuisine" id='name' value={form.cuisine} onChange={handleChange}/><br />
      <input type="submit" />
      {restaraunts.length > 0 ? restaraunts.map((restaraunt)=>(
        <div key={restaraunt.name} style={{border: "1px solid blue", margin: "1rem 0 0 0" }}>
          <p>{restaraunt.name}</p>
          <p>{restaraunt.cuisine}</p>
        </div>
      )) : <p>No restaruants</p>}
    </form>
  )
}

export default App
