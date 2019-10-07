import React from 'react'
import styled from 'styled-components'

const DeafultSidebar = styled.div`
  overflow: hidden;
  width: 100%;

  > * {
    display: flex;
    flex-wrap: wrap;
  }

  > * > * {
    flex-basis: ${({ sidebarWidth }) => sidebarWidth};
    flex-grow: 1;
  }

  > * > ${({ sidebarOnRight }) => sidebarOnRight ? ':first-child' : ':last-child'} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${({ minWidth }) => minWidth} - ${({ theme }) => theme.spacing.base});
  }
`

const LeftDiv = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.half};
`

const RightDiv = styled.div`
  margin-left: ${({ theme }) => theme.spacing.half};
`

const Sidebar = ({ left, right, sidebarOnRight, minWidth = '30%', sidebarWidth = '35rem' }) => (
  <DeafultSidebar
    sidebarOnRight={sidebarOnRight}
    minWidth={minWidth}
    sidebarWidth={sidebarWidth}>
    <div>
      <LeftDiv>{left}</LeftDiv>
      <RightDiv>{right}</RightDiv>
    </div>
  </DeafultSidebar>
)

export default Sidebar
