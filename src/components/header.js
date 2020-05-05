import React from 'react'
import { Box, Heading, Flex, Text } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display='block'>
    {children}
  </Text>
)

const Header = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as='nav'
      align='center'
      justify='center'
      flexWrap='wrap'
      padding='0.5rem'
      bg='gray.50'
      width='full'
      {...props}
    >
      <Box
        display='flex'
        width={{ sm: 'full', md: '50%' }}
        justifyContent='space-between'
        flexWrap='wrap'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
            {site.siteMetadata.title}
          </Heading>
        </Flex>

        <Box
          display={{ sm: 'block', md: 'none' }}
          mt='5px'
          onClick={handleToggle}
        >
          <svg
            fill='black'
            width='12px'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: '50%' }}
          alignItems='center'
          justifyContent='flex-end'
          flexGrow={1}
        >
          <MenuItems>About</MenuItems>
          <MenuItems>Projects</MenuItems>
          <MenuItems>Uses</MenuItems>
        </Box>
      </Box>
    </Flex>
  )
}

export default Header
