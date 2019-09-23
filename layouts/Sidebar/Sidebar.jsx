import React from 'react'
import styled from 'styled-components'

const DeafultSidebar = styled.div`
    overflow: hidden;

  > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(16px / 2 * -1);
  }

  > * > * {
    margin: calc(16px / 2);
    flex-grow: 1;
  }

  > * > ${({ sidebarOnRight }) => sidebarOnRight ? ':first-child' : ':last-child'} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - 16px);
  }
`

const Sidebar = ({ left, right, sidebarOnRight }) => (
  <DeafultSidebar sidebarOnRight={sidebarOnRight}>
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  </DeafultSidebar>
)

export default Sidebar
