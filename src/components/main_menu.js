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
        <NavLink to="/about-me" activeStyle={selectedStyle}>
          关于我
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/work-experiences" activeStyle={selectedStyle}>
          工作经验
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/project-experiences" activeStyle={selectedStyle}>
          项目经验
        </NavLink>
      </p>

      <p className="main-menu-nav">
        <NavLink to="/download-resume" activeStyle={selectedStyle}>
          简历下载
        </NavLink>
      </p>
    </nav>
  )
}
