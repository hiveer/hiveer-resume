import React from 'react'

import { MainMenu } from './main_menu.js'

export const PageTemplate = ({children}) => {
  return (
    <div className="page">
      <MainMenu />
      {children}
    </div>
  )
}
