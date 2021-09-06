import React from 'react'
import { func, object } from 'prop-types'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Auto.Works Player</title>
        <meta
          name="description"
          content="Re-engineered to deliver true performance and interoperability."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: func,
  pageProps: object
}

export default MyApp
