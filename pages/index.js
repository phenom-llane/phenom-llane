import React from 'react'
import Head from 'next/head'

const App = () => (
  <>
    <Head>
      <link rel="shortcut icon" href="/static/images/phenom-logo.png" type="image/png" />
      <title>Phenom Llane - A WoW Guild on Llane-US</title>
    </Head>

    <header>
      <img src="/static/images/phenom-logo.png" alt="Phenom Logo" />
      <h1>Phenom Guild of Llane</h1>
    </header>

    <p>{'Welcome to the website for Phenom of Llane-US'}</p>

    <style>
      {`
        header {
          display: flex;
          height: 10vh;
        }

        header img {
          height: 10vh;
        }
      `}
    </style>
  </>
)

export default App
