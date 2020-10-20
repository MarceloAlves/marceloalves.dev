import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Project from '../components/project'
import { SimpleGrid, Heading, Box } from '@chakra-ui/core'
import { useSprings, useSpring, animated } from 'react-spring'

const Projects = () => {
  const {
    github: {
      viewer: { pinnedItems },
    },
  } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    url
                    stargazers {
                      totalCount
                    }
                    description
                    languages(first: 10) {
                      edges {
                        node {
                          id
                          color
                          name
                        }
                      }
                    }
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const direction = ['left', 'right']
  const springs = useSprings(
    pinnedItems.edges.length,
    pinnedItems.edges.map((item, idx) => ({
      from: { [direction[idx % 2]]: -1000 },
      to: { [direction[idx % 2]]: 0 },
    }))
  )
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  })

  return (
    <Box paddingBottom='2em'>
      <animated.div style={fadeIn}>
        <Heading pb='4' fontWeight={400} style={fadeIn}>
          Projects
        </Heading>
      </animated.div>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX='30px' spacingY='30px'>
        {springs.map((props, idx) => (
          <Project
            key={pinnedItems.edges[idx].node.id}
            animatedStyles={props}
            description={pinnedItems.edges[idx].node.description}
            name={pinnedItems.edges[idx].node.name}
            primaryLanguage={pinnedItems.edges[idx].node.primaryLanguage}
            stargazers={pinnedItems.edges[idx].node.stargazers}
            url={pinnedItems.edges[idx].node.url}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Projects
