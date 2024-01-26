'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function HomeButton () {
  const pathname = usePathname()

  return (
    <Link
      className={`btn btn-blue mx-2 ${pathname === '/' ? 'btn-active' : ''}`}
      href="/"
    >
      Home Page
    </Link>
  )
}

function CounterButton () {
  const pathname = usePathname()

  return (
    <Link
      className={`btn btn-blue mx-2 ${pathname === '/counter' ? 'btn-active' : ''}`}
      href="counter"
    >
      Counter Page
    </Link>
  )
}

function WeatherButton () {
  const pathname = usePathname()

  return (
    <Link
      className={`btn btn-blue mx-2 ${pathname === '/weather' ? 'btn-active' : ''}`}
      href="weather"
    >
      Weather Page
    </Link>
  )
}

export default function Navigation () {
  return (
    <div>
      <HomeButton/>
      <CounterButton />
      <WeatherButton />
    </div>
  )
}
