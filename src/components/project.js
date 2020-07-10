import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Box, Text } from '@chakra-ui/core'
import { animated } from 'react-spring'

const Project = ({
  description,
  name,
  primaryLanguage,
  stargazers,
  url,
  animatedStyles,
}) => {
  return (
    <Box
      as={animated.div}
      style={animatedStyles}
      backgroundColor='white'
      rounded='lg'
      padding='20px'
      position='relative'
      boxShadow='lg'
    >
      <Box display='flex' justifyContent='space-between' mb='30px'>
        <Text
          fontWeight='bold'
          as='a'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {name}
        </Text>
        {primaryLanguage && (
          <Text
            textAlign='right'
            fontWeight='bold'
            borderBottom={`3px solid ${primaryLanguage.color}`}
          >
            {primaryLanguage?.name}
          </Text>
        )}
      </Box>

      <Box mb='30px'>
        <Text>{description}</Text>
      </Box>
      <Box>
        <Text>
          <FontAwesomeIcon icon={faStar} />
          <Text as='span' ml={2}>
            {stargazers.totalCount}
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

export default Project
