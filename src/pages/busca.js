import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Search from '../components/Search/index'
import { useStaticQuery, graphql } from 'gatsby'


const index = ({ data, location }) => {
const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle} location={location} >
      <SEO title={siteTitle} />
      <Search />
    </Layout>

  );
}

export default index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`