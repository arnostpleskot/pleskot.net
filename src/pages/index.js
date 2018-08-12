import React from 'react'

import Heading from '../sections/Heading'
import Work from '../sections/Work'
import Me from '../sections/Me'
import Contact from '../sections/Contact'

import Footer, { FooterEmail } from '../components/Footer'
import Menu from '../components/Menu'

const IndexPage = ({ data }) => (
  <div>
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
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        technologies
      }
    }
  }
`
