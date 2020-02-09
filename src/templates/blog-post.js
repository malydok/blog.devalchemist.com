import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { title, description } = this.props.data.site.siteMetadata

    return (
      <Layout
        location={this.props.location}
        title={title}
        description={description}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article className="article">
          <header className="article__header">
            <Link to="/" className="article__back article-link">
              <span class="article__back-inner">
                ← <span className="article__back-text">Back to articles</span>
              </span>
            </Link>
            <h1 className="article__title">{post.frontmatter.title}</h1>
            <small className="article__date">{post.frontmatter.date}</small>
          </header>
          <div
            className="article__content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer>
            <Link
              to="/"
              className="article__back article__back--bottom article-link"
            >
              <span class="article__back-inner">
                ← <span className="article__back-text">Back to articles</span>
              </span>
            </Link>
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
