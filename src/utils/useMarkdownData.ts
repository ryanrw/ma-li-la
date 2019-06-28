import { useStaticQuery, graphql } from 'gatsby'

function useMarkdownData(title: string): markdownDataFromFindFunction | undefined {
  const data: markdownDataQuery = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `
  )

  const selectedData:
    | markdownDataFromFindFunction
    | undefined = data.allMarkdownRemark.edges.find(
    item => item.node.frontmatter.title === title
  )

  return selectedData
}

export default useMarkdownData
