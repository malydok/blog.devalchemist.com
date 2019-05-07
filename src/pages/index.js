import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { title, description } = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={title}
        description={description}
      >
        <SEO title="All posts" keywords={[`blog`, `javascript`, `front-end`]} />
        <ul className="articles-list">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li className="articles-list__item" key={node.fields.slug}>
                <Link
                  to={node.fields.slug}
                  key={node.fields.slug}
                  className="article-link"
                >
                  <h2 className="article-link__title article__title">
                    {title}
                  </h2>
                  <small className="article-link__date article__date">
                    {node.frontmatter.date}
                  </small>
                </Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
