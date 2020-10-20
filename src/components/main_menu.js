import React from 'react'
import { NavLink } from 'react-router-dom'

import './main_menu.css'

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

export const MainMenu = () => {
  return(
    <nav className="main-menu">
      <p>
        <NavLink to="/">
        </NavLink>
      </p>

      <p>
        <NavLink to="/about" activeStyle={selectedStyle}>
          [About]
        </NavLink>
      </p>

      <p>
        <NavLink to="/events" activeStyle={selectedStyle}>
          [Events]
        </NavLink>
      </p>

      <p>
        <NavLink to="/products" activeStyle={selectedStyle}>
          [Products]
        </NavLink>
      </p>

      <p>
        <NavLink to="/contact" activeStyle={selectedStyle}>
          [Contact Us]
        </NavLink>
      </p>
    </nav>
  )
}
