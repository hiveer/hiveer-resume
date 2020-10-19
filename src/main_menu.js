import React from 'react'
import { NavLink } from 'react-router-dom'

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

export const MainMenu = () => {
  return(
    <nav className="main-menu">
      <NavLink to="/">
      </NavLink>

      <NavLink to="/about" activeStyle={selectedStyle}>
        [About]
      </NavLink>

      <NavLink to="/events" activeStyle={selectedStyle}>
        [Events]
      </NavLink>

      <NavLink to="/products" activeStyle={selectedStyle}>
        [Products]
      </NavLink>

      <NavLink to="/contact" activeStyle={selectedStyle}>
        [Contact Us]
      </NavLink>
    </nav>
  )
}
