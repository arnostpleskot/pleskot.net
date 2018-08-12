import styled from 'styled-components'
import { hideText } from 'polished'

export const StyledDoH2 = styled.h2`
  background-image: url(${require(`../../assets/do.svg`)});
  ${hideText()};
  width: 39px;
`

export const StyledDontH2 = styled.h2`
  background-image: url(${require(`../../assets/dont.svg`)});
  ${hideText()};
  width: 28px;
`
