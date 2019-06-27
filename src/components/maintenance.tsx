import React from 'react'
import styled from '@emotion/styled'
import Layout from './layout'
import Header from './helmet'

const MaintenanceMain = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;

  & > h1 {
    font-size: 7rem;
  }
`

/**
 * Component which show other people this website is in maintenance mode.
 */
const Maintenance: React.FC = () => {
  return (
    <Layout>
      <Header pageTitle='Coming soon!' />
      <MaintenanceMain>
        <h1>Coming Soon!</h1>
      </MaintenanceMain>
    </Layout>
  )
}

export default Maintenance
