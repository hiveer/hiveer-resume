import React from 'react'

import { MainMenu } from './main_menu.js'

import './page_template.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageTemplate = ({children}) => {
  return (
    <div className="page">
      <div class="row row-no-gutters">
        <div class="col-xs-5 col-md-5">
          <MainMenu />
        </div>
        <div class="col-xs-7 col-md-7">
          {children}
        </div>
      </div>
    </div>
  )
}
