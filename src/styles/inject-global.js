import { injectGlobal } from 'styled-components'
import variables from './variables'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 62.5%;
  }
  body {
    color: ${variables.colors.primary};
    font-family: ${variables.font.family};
    font-size: ${variables.font.size.base};
    font-weight: 300;
    line-height: 1.3;
    min-width: 320px;
  }
  h1 {
    font-size: ${variables.font.size.big};
    font-weight: 300;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: lowercase;
  }
  h2 {
    font-size: ${variables.font.size.bigger};
    font-weight: 300;
    letter-spacing: 0.2em;
    margin-top: 1.66em;
    text-transform: lowercase;
  }
  p {
    text-align: center;
  }
  a, a:visited {
    color: ${variables.colors.secondary};
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }
  address {
    font-size: ${variables.font.size.small};
    text-align: center;
  }
`
