import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorEle = () => {
    const err= useRouteError()
  return (
    <div>
      <h1>Oops Something went wrong</h1>
      <h2>{err.status}: {err.statusText}</h2>
    </div>
  )
}

export default ErrorEle
