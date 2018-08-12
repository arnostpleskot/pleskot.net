// @flow
import * as React from 'react'
import Section from '../components/Section'
import Header from '../components/Header'
import Subheader from '../components/Subheader'

const Heading = ({ data }) => (
  <Section>
    <Header>Arnošt Pleskot</Header>
    <Subheader>/ {data.join(' / ')} /</Subheader>
  </Section>
)

export default Heading
