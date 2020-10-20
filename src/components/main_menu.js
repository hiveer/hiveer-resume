import React from 'react'
import { NavLink } from 'react-router-dom'

import './main_menu.css'
import headportrait from './head_portrait.png'

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

export const MainMenu = () => {
  return(
    <nav className="main-menu">
      <p>
        <img className="head-portrait" src={headportrait} />
      </p>

      <p className="main-menu-nav">
        <NavLink to="/">
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/about" activeStyle={selectedStyle}>
          [About]
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/events" activeStyle={selectedStyle}>
          [Events]
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/products" activeStyle={selectedStyle}>
          [Products]
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/contact" activeStyle={selectedStyle}>
          [Contact Us]
        </NavLink>
      </p>
    </nav>
  )
}
