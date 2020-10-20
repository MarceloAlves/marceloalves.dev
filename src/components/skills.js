import React from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  ListItem,
  List,
  ListIcon,
  Text,
} from '@chakra-ui/core'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useSpring, animated, useSprings } from 'react-spring'

const SkillBox = ({ skills = [], title = '', style }) => (
  <Box
    as={animated.div}
    style={style}
    backgroundColor='white'
    rounded='lg'
    padding='20px'
    boxShadow='lg'
    position='relative'
  >
    <Text fontWeight='bold' marginBottom='10px'>
      {title}:
    </Text>
    <List spacing={3}>
      {skills.map((item) => (
        <ListItem key={item}>
          <ListIcon as={ChevronRightIcon} />
          {item}
        </ListItem>
      ))}
    </List>
  </Box>
)

const Skills = () => {
  const skills = [
    {
      title: 'Proficient',
      skills: ['JavaScript / React', 'HTML', 'CSS / SASS', 'Git / GitHub'],
    },
    {
      title: 'Comfortable',
      skills: ['Ruby / Ruby On Rails', 'SQL', 'Serverless Framework'],
    },
    { title: 'Interested', skills: ['GraphQL', 'NextJS', 'Express'] },
  ]

  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  })

  const springs = useSprings(
    3,
    skills.map((item, idx) => ({
      from: { bottom: -1000 },
      to: { bottom: 0 },
    }))
  )

  return (
    <Box paddingBottom='2em'>
      <animated.div style={fadeIn}>
        <Heading pb='4' fontWeight={400}>
          Skills
        </Heading>
      </animated.div>
      <SimpleGrid columns={[1, null, 3]} spacing='30px'>
        {springs.map((props, idx) => (
          <SkillBox
            key={idx}
            title={skills[idx].title}
            skills={skills[idx].skills}
            style={props}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Skills
