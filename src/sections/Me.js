// @flow
import * as React from 'react'
import Section from '../components/Section'
import { DoH2, DontH2 } from '../components/ReplacedH2'

const Me = () => (
  <Section dark>
    <h1>Me</h1>
    <p>
      web developer /{' '}
      <a href="https://en.wikipedia.org/wiki/Pardubice">
        Czech Republic - Pardubice
      </a>
    </p>

    <DoH2>Do</DoH2>
    <p>Reason, React, Elm, Node, Elixir, HTML, CSS, JS...</p>

    <DontH2>Don't do</DontH2>
    <p>
      PHP, Java, SEO, SEM, copywriting, graphic&nbsp;design
      or&nbsp;website&nbsp;management
    </p>
  </Section>
)

export default Me
