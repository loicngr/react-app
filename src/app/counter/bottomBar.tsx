import React, { Fragment } from 'react'

export default function BottomBar ({ onClick }: { onClick: CallableFunction }) {
  const updateCounter = () => {
    onClick()
  }

  return <Fragment>
    <button
      className="btn btn-blue"
      onClick={updateCounter}
    >
      Add count
    </button>
  </Fragment>
}
