import React, { useEffect } from 'react'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import { MainMenu } from './../mainMenu/mainMenu.js'
import { FooterNav } from './../footerNav/footerNav.js'

import './pageTemplate.css'
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
        </div>
        <div className="col-xs-9 col-md-9 height100 right-page-content">
          {children}
        </div>
      </div>
      <MobileView>
        <FooterNav />
      </MobileView>
    </div>
  )
}
