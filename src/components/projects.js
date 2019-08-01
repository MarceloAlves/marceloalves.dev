import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Section = styled.section`
  ${tw`container`}
`

const Container = styled.div`
  ${tw`h-64`}
`

console.log(tw`preflight`)

const Projects = () => {
  return (
    <Section>
      <Container>something here</Container>
    </Section>
  )
}

export default Projects
