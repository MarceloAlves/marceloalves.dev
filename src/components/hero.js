import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from '@chakra-ui/core'
import BackgroundImage from 'gatsby-background-image'
import { useSpring, animated } from 'react-spring'

const Hero = () => {
  const emojiProps = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, left: 0 })
      await next({ transform: 'rotate(15deg)' })
      await next({ transform: 'rotate(0deg)' })
    },
    from: { opacity: 0, left: -9999, transform: 'rotate(0deg)' },
  })

  const textProps = useSpring({
    to: { opacity: 1, right: 0 },
    from: { opacity: 0, right: -9999 },
  })

  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(name: { eq: "spaceeeeeeee" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      Tag={'div'}
      fluid={desktop.childImageSharp.fluid}
      backgroundColor={'#fff'}
    >
      <Box
        minHeight={{ base: '25vh', md: '75vh' }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          backgroundColor='#fff'
          borderRadius='1rem'
          padding={{ base: 1, md: 20 }}
          boxShadow='inset 1px 1px 5px #000'
        >
          <Text
            as={animated.p}
            style={emojiProps}
            position='relative'
            fontSize='50px'
            pr={4}
          >
            <span role='img' aria-label='waving hand emoji'>
              👋🏽
            </span>
          </Text>
          <Text
            as={animated.p}
            style={textProps}
            position='relative'
            fontSize={{ base: 'lg', md: '3xl' }}
          >
            Hi There. I'm Marcelo Alves
            <br />A web developer based in California
          </Text>
        </Box>
      </Box>
    </BackgroundImage>
  )
}

export default Hero
