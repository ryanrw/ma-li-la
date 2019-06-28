import React from 'react'
import styled from '@emotion/styled'
import Layout from './layout'
import Header from './helmet'
import { useMarkdownData } from '../utils'

const MainSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  color: #fff;
  margin: 30px;

  & > .main-text {
    width: 60%;
    font-size: 1.5rem;
  }
`

const Line = styled.div`
  border-top: 1px solid #fff;
  width: 60%;
  margin: 20px 0;
`

const MainPage: React.FC = () => {
  const data = useMarkdownData('ข้อความหน้าหลัก')
  console.log(data)
  return (
    <Layout>
      <Header pageTitle='เบเกอรี่แสนอร่อย' />
      <MainSection>
        {/* Logo will be here, some day. Stay tune! */}
        <h1>Logo Here</h1>
        {/* I have a problem with Ilustrator, so use this hr first. */}
        <Line />
        {typeof data !== 'undefined' ? (
          <div
            className='main-text'
            dangerouslySetInnerHTML={{ __html: data.node.html }}
          />
        ) : (
          <div>loading...</div>
        )}
      </MainSection>
    </Layout>
  )
}

export default MainPage
