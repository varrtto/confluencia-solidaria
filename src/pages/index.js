import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Product from "../components/product"
import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"
import StarRatingComponent from 'react-star-rating-component';


const IndexPage = data => (

  <Layout>
    <SEO title="Inicio" keywords={[`confluencia`, `cuarentena`, `ayuda`]} />
    {console.log(data.file)} 
    <Banner image={data.data.file.childImageSharp.fluid} 
            heading="CONFLUENCIA SOLIDARIA" 
            subHeading="¡Ayudemos a negocios que nos necesitan, haciendo pre-compras!"/>
    
      <div className="container">

        <div className="text-center">
          <h2 className="with-underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        </div>
        <div className="row">
          <div className="col-3 text-center"/>
          <div className="col-6 text-center"></div>
        </div>
        <div className="row">
          <div className="col-3 text-center"/>
          <div className="col-6 text-center">
            <p className="medium-text">Ayudemos a PyMEs, autónomos/as y emprendedores que no pueden ofrecer sus servicios a distancia ni realizar 
            delivery de sus productos. <b>Compremos vouchers abonando por adelantado para usar luego de la cuarentena.</b>
            </p>
          </div>
        </div>
      </div>
    
    <div className="container">
      
      <div className="text-center"><h1 className="with-underline">Últimos Vouchers</h1></div>
      
      <div className="row product-main">
          {data.data.allContentfulProduct.edges.map(items => (
              <Product item={items}/>
          ))}
      </div>

    </div>
    {/* <LatestBlogs data={data.data.allContentfulBlogs} /> */}
    {/* <Countdown data={data.data.contentfulDealCountDown} /> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6,sort:{fields:createdAt,order: DESC}){
      edges{
        node{
          id
          name
          slug
          rating
          price
          newPrice
          mercadopago
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }          
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    file(relativePath: { eq: "fondonqn4.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulBlogs(limit: 3,sort:{fields:createdAt,order: DESC}) {
      edges {
        node {
          id
          title
          slug
          featureImage {
            fluid(maxWidth: 1120) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`



