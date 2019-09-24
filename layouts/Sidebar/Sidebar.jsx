import React from 'react'
import styled from 'styled-components'

const DeafultSidebar = styled.div`
  overflow: hidden;
  width: 100%;

  > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(${({ theme }) => theme.spacing.base} / 2 * -1);
  }

  > * > * {
    margin: calc(${({ theme }) => theme.spacing.base} / 2);
    flex-basis: ${({ sidebarWidth }) => sidebarWidth};
    flex-grow: 1;
  }

  > * > ${({ sidebarOnRight }) => sidebarOnRight ? ':first-child' : ':last-child'} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${({ minWidth }) => minWidth} - ${({ theme }) => theme.spacing.base});
  }
`

const Sidebar = ({ left, right, sidebarOnRight, minWidth = '30%', sidebarWidth = '35rem' }) => (
  <DeafultSidebar
    sidebarOnRight={sidebarOnRight}
    minWidth={minWidth}
    sidebarWidth={sidebarWidth}>
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  </DeafultSidebar>
)

export default Sidebar
