import React from 'react'
import Head from 'next/head'

import SiteNav from '../components/SiteNav'

const App = () => (
  <>
    <Head>
      <link rel="shortcut icon" href="/static/images/logo.png" type="image/png" />
      <title>Phenom Llane - A WoW Guild on Llane-US</title>
    </Head>

    <header role="banner heading">
      <h1 style={{ display: 'none' }}>Phenom-Llane</h1>
      <img src="/static/images/phenom-logo.png" alt="Phenom-Llane" />
    </header>

    <SiteNav />

    <p>{'Welcome to the website for Phenom of Llane-US'}</p>

    <style jsx>
      {`
        header {
          height: 10vh;
          display: flex;
        }

        header img {
          height: 100%;
        }
      `}
    </style>

    <style global jsx>
      {`
        :root {
          --black: rgb(20, 20, 20);
          --white: rgb(230, 230, 230);
        }

        * {
          box-sizing: border-box;
        }

        body {
          background-color: var(--black);
          color: var(--white);
        }
      `}
    </style>
  </>
)

export default App
