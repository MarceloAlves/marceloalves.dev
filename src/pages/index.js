import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from './hero'
import Projects from './projects'

const IndexPage = () => (
  <Layout>
    <SEO title={'Marcelo Alves'} />
    <Hero />
    <Projects />
  </Layout>
)

export default IndexPage
