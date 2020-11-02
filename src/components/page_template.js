import React, { useEffect } from 'react'

import { MainMenu } from './main_menu.js'

import './page_template.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageTemplate = ({children}) => {
  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className="page">
      <div className="row row-no-gutters height100">
        <div className="col-xs-3 col-md-3 height100 left-sidebar">
          <MainMenu />
          <p className="disclaimer"> Powered by React Router </p>
        </div>
        <div className="col-xs-9 col-md-9 height100 right-page-content">
          {children}
        </div>
      </div>
    </div>
  )
}
