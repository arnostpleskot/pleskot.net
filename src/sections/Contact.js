// @flow
import * as React from 'react'
import Section from '../components/Section'

const Contact = () => (
  <Section dark>
    <h1>Contact me</h1>
    <p>
      <a href="mailto:me@pleskot.net">me@pleskot.net</a>
      <br />
      <a
        href="https://github.com/arnostpleskot"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{' '}
      /{' '}
      <a
        href="https://www.linkedin.com/in/arnošt-p-8132245b"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </p>
    <h2>Legals</h2>
    <address>
      Arnošt Pleskot<br />
      Jindrisska 1620, 53002 Pardubice<br />
      ID: 88165566<br />
      The physical person registered in the Trade Register<br />
      from 27. 9. 2011 by Municipality of Pardubice.
    </address>
  </Section>
)

export default Contact
