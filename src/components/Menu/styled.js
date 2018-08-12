import styled from 'styled-components'

export const StyledMenu = styled.ul`
  align-items: center;
  display: flex;
  justify-content; center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledListItem = styled.li`
  padding: 0;

  &:before {
    content: '/';
    margin: 0 0.25em;
  }

  &:last-child:after {
    content: '/';
    margin-left: 0.25em;
  }
`
