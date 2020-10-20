import React from 'react'

import { MainMenu } from './main_menu.js'

import './page_template.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageTemplate = ({children}) => {
  return (
    <div className="page">
      <div class="row row-no-gutters height100">
        <div class="col-xs-3 col-md-3 height100 left-sidebar">
          <MainMenu />
        </div>
        <div class="col-xs-9 col-md-9 height100 right-page-content">
          {children}
        </div>
      </div>
    </div>
  )
}
