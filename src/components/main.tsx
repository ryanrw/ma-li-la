import React from 'react'
import Layout from './layout'
import Header from './helmet'
import styled from '@emotion/styled'

const MainSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  color: #fff;
  margin: 30px;
`

const Line = styled.div`
  border-top: 1px solid #fff;
  width: 60%;
  margin: 20px 0;
`

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Header pageTitle='เบเกอรี่แสนอร่อย' />
      <MainSection>
        {/* Logo will be here, some day. Stay tune! */}
        <h1>Logo Here</h1>
        {/* I have a problem with Ilustrator, so use this hr first. */}
        <Line />
      </MainSection>
    </Layout>
  )
}

export default MainPage
