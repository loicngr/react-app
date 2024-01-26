import React from 'react'

interface WeatherCurrent {
  sys: {
    country: string
  }
  coord: {
    lon: number
    lat: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  name: string
  id: string
  main: {
    temp: number
    temp_min: number
    temp_max: number
    feels_like: number
    humidity: number
  }
  rain: {
    '1h': number
  }
  timezone: number
}

function kToC (temp: number) {
  return Math.floor(temp - 273.15)
}

function kToF (temp: number) {
  return Math.floor(((temp - 273.15) * 1.8) + 32)
}

async function getData (): Promise<WeatherCurrent | null> {
  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

  if (typeof WEATHER_API_KEY === 'undefined') {
    console.error('WEATHER_API_KEY not found')
    return null
  }

  // https://openweathermap.org/current
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.825110&lon=4.233310&appid=${WEATHER_API_KEY}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 }
  })

  if (!response.ok) {
    return null
  }

  return await response.json() as WeatherCurrent
}

export default async function Main () {
  const data = await getData()

  return data === null
    ? (<div>No data</div>)
    : (<div>
      <p>{ data.name } ({data.sys.country})</p> <br/>
      Kelvin temperature: { (data.main.temp) } K <br/>
      Celsius temperature: { kToC(data.main.temp) } °C <br/>
      Fahrenheit temperature: { kToF(data.main.temp) } °F
    </div>)
}
