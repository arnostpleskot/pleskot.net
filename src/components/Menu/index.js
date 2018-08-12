// @flow
import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StyledMenu, StyledListItem } from './styled'

const Menu = ({ links }) => (
  <StyledMenu>
    {links.map(item => (
      <StyledListItem key={item.href}>
        <AnchorLink href={`#${item.href}`}>{item.label}</AnchorLink>
      </StyledListItem>
    ))}
  </StyledMenu>
)

export default Menu
