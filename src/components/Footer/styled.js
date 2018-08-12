import styled from 'styled-components'

export const StyledFooter = styled.footer`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 20px;
  position: fixed;
  right: 0;

  @media (min-width: 450px) {
    justify-content: space-between;
  }
`

export const StyledFooterEmail = styled.a`
  display: none;

  @media (min-width: 450px) {
    display: block;
  }
`
