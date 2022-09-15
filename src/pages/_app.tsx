import React from 'react'
import Head from 'next/head'
import store from '@store/store'
import type { AppProps } from 'next/app'
import '@styles/common.scss'
import "the-new-css-reset/css/reset.css"

const BrowserApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Happy Birthday Selen</title>
        <meta
          name="description"
          content="Happy Birthday Selen 2022"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

const App: React.FC<AppProps> = (props: AppProps) => {
  return <BrowserApp {...props} />
}

export default store.withRedux(App)
