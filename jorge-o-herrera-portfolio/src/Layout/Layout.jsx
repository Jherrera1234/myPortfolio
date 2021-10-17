import React from 'react'
import Nav from '../Nav/Nav'
import './Layout.css'

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="content-container">{props.children}</div>

    </div>
  )
}
