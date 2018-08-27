import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Heading from '../sections/Heading'
import Work from '../sections/Work'
import Me from '../sections/Me'
import Contact from '../sections/Contact'

import Layout from '../components/Layout'
import Footer, { FooterEmail } from '../components/Footer'
import Menu from '../components/Menu'

const IndexPage = ({ data }) => (
  <Layout>
    <header>
      <Heading data={data.site.siteMetadata.technologies} />
    </header>
    <section id="me">
      <Me />
    </section>
    <section id="my-work">
      <Work />
    </section>
    <section id="contact-me">
      <Contact />
    </section>
    <Footer>
      <FooterEmail href="mailto:me@pleskot.net">me@pleskot.net</FooterEmail>
      <Menu
        links={[
          { label: 'me', href: 'me' },
          { label: 'my work', href: 'my-work' },
          { label: 'contact me', href: 'contact-me' },
        ]}
      />
    </Footer>
  </Layout>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            technologies
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
)
