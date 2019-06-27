import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Header from '../components/helmet'

const NotFoundStyle = styled.div`
  box-sizing: border-box;
  position: relative;
  color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > h1 {
    font-size: 7rem;
    margin: 0;
  }

  & > p {
    margin: 0;
    font-size: 3rem;
  }
`

const NotFoundPage: React.FC = () => (
  <Layout>
    <Header pageTitle='Not found!' />
    <NotFoundStyle>
      <h1>NOT FOUND</h1>
      <p>คุณอาจจะใส่ Link ผิดนะ</p>
    </NotFoundStyle>
  </Layout>
)

export default NotFoundPage
