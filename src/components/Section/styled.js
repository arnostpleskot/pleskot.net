import styled, { css } from 'styled-components'
import variables from '../../styles/variables'

export const StyledSection = styled.article`
  align-items: center;
  background-color: ${variables.colors.backcground};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  width: 100%;

  ${props =>
    props.dark &&
    `
    background-color: ${variables.colors.primary};
    color: ${variables.colors.backcground};
  `};
`
