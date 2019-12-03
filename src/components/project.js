import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
`

const Card = styled.div`
  ${tw`max-w rounded overflow-hidden shadow bg-white`};
`

const Header = styled.div`
  ${tw`flex justify-between`};
`

const Inner = styled.div`
  ${tw`flex flex-col content-between px-6 py-4`};
`
const Title = styled.div`
  ${tw`flex-1 font-bold text-xl mb-2`};
`

const Body = styled.div`
  ${tw`flex-1 text-gray-700 text-base py-10`};
`

const Language = styled.span`
  ${tw`mb-2 text-sm`};
  border-bottom: 3px solid ${props => props.color};
`

const Stats = styled.div`
  ${tw`flex-1`};
`

const Project = ({ description, name, primaryLanguage, stargazers, url }) => {
  return (
    <CardLink href={url} target="_blank">
      <Card>
        <Inner>
          <Header>
            <Title>{name}</Title>
            {primaryLanguage && (
              <Language color={primaryLanguage.color}>
                {primaryLanguage.name}
              </Language>
            )}
          </Header>
          <Body>{description}</Body>
          <Stats>
            <FontAwesomeIcon icon={faStar} style={tw`mr-1`} />
            {stargazers.totalCount}
          </Stats>
        </Inner>
      </Card>
    </CardLink>
  )
}

export default Project
