import App from "next/app"
import React, { Component } from "react"
import withReduxStore from "../lib/with-redux-store"
import { Provider } from "react-redux"
import MainLayout from "../components/layouts/mainLayout"

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    /* console.log(this.props) */
    return (
      <Provider store={reduxStore}>
        <div className="app">
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </div>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
