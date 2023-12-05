import React from 'react'

function ErrorPage() {
  return (
    <div id="errorpage">
      <h1>Oops!</h1>
      <p>Sorry, an expected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage