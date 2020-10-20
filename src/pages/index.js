import React from 'react'
import { Layout, SEO, Hero, Projects, Skills } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title={'Marcelo Alves'} />
    <Hero />
    <Projects />
    <Skills />
  </Layout>
)

export default IndexPage
