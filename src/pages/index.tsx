import React from 'react'
import { useSiteMetaData } from '../utils'
import Maintenance from '../components/maintenance'

const IndexPage: React.FC = () => {
  const data = useSiteMetaData()
  console.log(data.isMaintenance)

  return data.isMaintenance ? (
    <Maintenance />
  ) : (
    <div>{/* develop some miracle here! */}</div>
  )
}

export default IndexPage
