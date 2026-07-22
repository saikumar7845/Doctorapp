import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Weather() {
  const [city, setCity] = useState([])
  const [weather, setWeather] = useState([])
  const [temp, setTemp] = useState('')
  async function handleform(e) {
    e.preventDefault()
    console.log(city)
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`
    let weatherdata = await axios.get(api)
    setWeather(weatherdata.data)
    setTemp(weatherdata.data.main.temp)
  }
  return (
    <div>
      <form action="" onSubmit={handleform}>
        <input onChange={e => setCity(e.target.value)} value={city} type="text" className='text-field' placeholder='enter city' />
        <button type='submit'>Search</button>
      </form>
      {weather ? <h1>Temparature is {temp}</h1> : <>no data</>}

    </div>
  )
}

export default Weather