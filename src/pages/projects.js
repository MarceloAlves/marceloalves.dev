import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import backgroundSvg from '../images/i-like-food.svg'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Project from '../components/project'
import tailwind from '../../tailwind'
import { Fade } from 'react-awesome-reveal'

const Section = styled.section`
  ${tw`container`};
`

const Container = styled.div`
  ${tw`p-10 bg-fixed`}
  background-color: #9aa3e5;
  background-image: url(${backgroundSvg});
`

const CardContainer = styled.div`
  ${tw`mb-4`};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: ${tailwind.screens.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${tailwind.screens.sm}) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.div`
  ${tw`font-sans font-extrabold text-3xl my-4 mb-10`};
`

const Projects = () => {
  const {
    github: {
      viewer: { pinnedItems }
    }
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

  return (
    <Section>
      <Container>
        <Title>Projects</Title>
        <Fade triggerOnce>
          <CardContainer>
            {pinnedItems.edges.map(({ node }) => (
              <Project
                key={node.id}
                description={node.description}
                name={node.name}
                primaryLanguage={node.primaryLanguage}
                stargazers={node.stargazers}
                url={node.url}
              />
            ))}
          </CardContainer>
        </Fade>
      </Container>
    </Section>
  )
}

export default Projects
