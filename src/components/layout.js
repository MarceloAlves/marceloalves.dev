import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
