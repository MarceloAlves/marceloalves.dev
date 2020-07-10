import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/core'
import { useSpring, animated } from 'react-spring'

const Hero = () => {
  const boxSlideIn = useSpring({
    from: { top: -1000 },
    to: { top: 0 },
    config: {
      tension: 75,
      friction: 14,
    },
  })

  return (
    <Box
      as={animated.div}
      style={boxSlideIn}
      backgroundColor='#fff'
      position='relative'
      mt='-40px'
      pt='40px'
      minHeight='200px'
      boxShadow='lg'
      marginBottom='70px'
      borderRadius='20px'
      textAlign='center'
    >
      <Heading as='h1' fontSize='6rem' fontWeight={400}>
        Marcelo Alves
      </Heading>
    </Box>
  )
}

export default Hero
