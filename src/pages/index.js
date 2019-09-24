import { Link } from 'gatsby'
import React from 'react'

const IndexPage = ({ data }) => {
  const products = data.allMarkdownRemark.edges
  return (
    <div className="product-list">
      {products.map(({ node }) => (
        <Link
          key={node.fields.slug}
          className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
          to={node.fields.slug}
        >
          <div className="relative pb-full">
            <img
              src={node.frontmatter.image}
              alt={node.frontmatter.name}
              className="absolute h-full w-full object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <div className="font-bold text-2xl text-gray-900">
              {node.frontmatter.name}
            </div>
            <div className="font-semibold text-l text-gray-700">
              €{node.frontmatter.price}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image
            name
            price
          }
        }
      }
    }
  }
`
