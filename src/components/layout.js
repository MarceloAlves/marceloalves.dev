import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
  CSSReset,
  theme as ChakraTheme,
  Flex,
  Box,
} from '@chakra-ui/core'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  background-color: #F7F7FF
}
`

const theme = {
  ...ChakraTheme,
  fonts: {
    ...ChakraTheme.fonts,
    heading: '"Bangers", sans-serif',
  },
  fontSizes: {
    ...ChakraTheme.fontSizes,
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <GlobalStyle />
      <Flex as='main' alignItems='center' flexDirection='column' m={5}>
        <Box maxWidth='1124px'>{children}</Box>
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
