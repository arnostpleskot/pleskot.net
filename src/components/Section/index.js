// @flow
import * as React from 'react'
import { StyledSection } from './styled'

const index = ({ children, dark }) => (
  <StyledSection dark={dark}>{children}</StyledSection>
)

export default index
