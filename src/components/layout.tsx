import React from 'react'
import { css, Global } from '@emotion/core'

const globalCSS = css`
  html,
  body {
    margin: 0;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    background: #ee9ca7; /* fallback for old browsers */
    background: linear-gradient(to right, #ffdde1, #ee9ca7);
    width: calc(100vw - (100vw - 100%)); /* This is full width minus with scroll bar */
    height: 100vh;
  }
`

/**
 * Layout component which is used in all component by default.
 */
const Layout: React.FC = props => {
  return (
    <div>
      {props.children}
      <Global styles={globalCSS} />
    </div>
  )
}

export default Layout
