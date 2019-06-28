import React from 'react'
import { useSiteMetaData } from '../utils'
import Maintenance from '../components/maintenance'
import MainPage from '../components/main'

const IndexPage: React.FC = () => {
  const data = useSiteMetaData()

  return data.isMaintenance ? <Maintenance /> : <MainPage />
}

export default IndexPage
