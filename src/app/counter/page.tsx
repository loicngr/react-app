'use client'

import React, { Fragment, useState } from 'react'
import { CounterContext } from '@/app/counter/Contexts'
import Main from '@/app/counter/main'
import BottomBar from '@/app/counter/bottomBar'
import Navigation from '@/app/navigation'

export default function Page () {
  const counterState = useState(0)
  const [counter, setCounter] = counterState

  return <Fragment>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h5>Counter Page</h5>
      <div>
        <CounterContext.Provider value={counter}>
          <Main/> <br/>
          <BottomBar onClick={() => {
            setCounter(c => c + 1)
          }}/>
        </CounterContext.Provider>
      </div>
      <Navigation/>
    </main>
  </Fragment>
}
