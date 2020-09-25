import React, { Component } from "react"
import Head from "next/head"
import Header from "./Header"

const MainLayout = (props) => (
  <>
    <Head>
      <title>Post Blog</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />

      <link
        href="https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" href="/static/css/styles.css" />
    </Head>
    <div className="mainLayout_container">
      <Header {...props} />

      <div className="main_container">{props.children}</div>
    </div>
  </>
)

export default MainLayout
