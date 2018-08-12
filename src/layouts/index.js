import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'sanitize.css/sanitize.css'
import '../styles/inject-global'

import Header from '../components/header'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
        { name: 'author', content: data.site.siteMetadata.author },
      ]}
    >
      <html lang="en" />
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`
