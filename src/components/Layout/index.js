import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'sanitize.css/sanitize.css'
import '../../styles/inject-global'
import { StaticQuery, graphql } from 'gatsby'

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
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
