import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Project from '../components/project'
import backgroundSvg from '../images/i-like-food.svg'
import { SimpleGrid, Heading, Box } from '@chakra-ui/core'
import { useTrail, animated } from 'react-spring'

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

  const trail = useTrail(6, { opacity: 1, from: { opacity: 0 } })

  return (
    <Box
      padding='50px'
      backgroundImage={`url(${backgroundSvg})`}
      backgroundColor='#9aa3e5'
      backgroundAttachment='fixed'
    >
      <Heading pb='4'>Projects</Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacingX='20px'
        spacingY='20px'
      >
        {pinnedItems.edges.map(({ node }, idx) => (
          <Project
            key={node.id}
            animatedStyles={trail[idx]}
            description={node.description}
            name={node.name}
            primaryLanguage={node.primaryLanguage}
            stargazers={node.stargazers}
            url={node.url}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Projects
