import React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetaData } from '../utils'

/**
 * Header component which create a <head> tag
 * @param {string} pageTitle - page title.
 */
const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const {
    title,
    charset,
    description,
    author,
    og_title,
    og_description,
    robots,
    keywords,
  } = useSiteMetaData()

  return (
    <Helmet>
      <meta charSet={charset} />
      <meta name='description' content={description} />
      <meta name='author' content={author} />
      <meta name='robots' content={robots} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={og_title} />
      <meta property='og:description' content={og_description} />
      <title>
        {pageTitle} | {title}
      </title>
    </Helmet>
  )
}

export default Header
