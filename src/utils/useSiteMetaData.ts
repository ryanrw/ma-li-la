import { useStaticQuery, graphql } from 'gatsby'

function useSiteMetaData(): metaData {
  const data: siteMetaDataQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            charset
            description
            author
            og_title
            og_description
            robots
            keywords
            isMaintenance
          }
        }
      }
    `
  )

  const { siteMetadata } = data.site

  return siteMetadata
}

export default useSiteMetaData
