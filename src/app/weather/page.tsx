import React, { Fragment, Suspense } from 'react'
import Navigation from '@/app/navigation'
import Main from '@/app/weather/main'
import Loading from '@/app/loading'

export default function Page () {
  return <Fragment>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h5>Weather Page</h5>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
      <Navigation />
    </main>
  </Fragment>
}
