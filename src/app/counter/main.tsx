import React, { Fragment, useContext } from 'react'
import { CounterContext } from '@/app/counter/Contexts'

export default function Main () {
  const counter = useContext(CounterContext)

  return <Fragment>
    Count : { counter }
  </Fragment>
}
