import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const HeroContainer = styled.div`
  ${tw`container`}
`

const Column = styled.div`
  ${tw`flex flex-col mx-4 w-full h-screen lg:w-2/3 justify-center items-start pt-12 pb-24 px-1 md:pl-32 text-white`}
`

const Title = styled.h1`
  ${tw`font-sans font-extrabold text-5xl my-4`}
  text-shadow: 2px 2px black;
`

const Text = styled.p`
  ${tw`leading-normal text-2xl mb-4 `}
  text-shadow: 2px 2px black;
`

const Hero = () => {
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
    <HeroContainer>
      <BackgroundImage Tag={'div'} fluid={desktop.childImageSharp.fluid} backgroundColor={'#fff'}>
        <Column>
          <Title>
            <span role="img" aria-label="waving hand emoji">
              👋
            </span>{' '}
            Hi There. I'm Marcelo Alves
          </Title>
          <Text>A web developer based in California</Text>
        </Column>
      </BackgroundImage>
    </HeroContainer>
  )
}

export default Hero
