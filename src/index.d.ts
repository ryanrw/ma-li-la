declare interface metaData {
  isMaintenance: boolean
  title: string
  charset: string
  description: string
  author: string
  og_title: string
  og_description: string
  robots: string
  keywords: string
}

declare interface siteMetaDataQuery {
  site: {
    siteMetadata: metaData
  }
}

declare interface HeaderProps {
  pageTitle: string
}

declare interface markdownData {
  frontmatter: {
    title: string
  }
  html: string
}

declare interface markdownDataFromFindFunction {
  node: markdownData
}

declare interface markdownDataQuery {
  allMarkdownRemark: {
    edges: markdownDataFromFindFunction[]
  }
}
