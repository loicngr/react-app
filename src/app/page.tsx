'use client'

import React from 'react'
import Navigation from '@/app/navigation'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h5>Home Page</h5>
      <Navigation/>
    </main>
  )
}
