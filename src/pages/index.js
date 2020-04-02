import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"
import StarRatingComponent from 'react-star-rating-component';

class IndexPost extends React.Component {
  constructor(props) {
    super(props);
  }

  priceWithDiscount(price, newPrice) {
    if (newPrice > 0) {
      return (
        <>
          <div className="col-sm-6 align-self-center">
            <span>Antes:</span> <span className="old-price">${price}</span>
          </div>
          <div className="col-sm-6 align-self-center">
            <span>Ahora:</span> <span className="price">${newPrice}</span>
          </div>
        </>
      )
    }
    else {
      return (
          <div className="col-sm-6 align-self-center">
            <span className="price">${price}</span>
          </div>
        )
    }
    
  }

  render() {

    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges.map(items => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
              <div className="details_List">
                {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fluid} />}

                <div className="details_inner">

                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  {/* <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={items.node.rating}
                  /> */}
                  <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                  <div className="row">
                    {/* <div className="col-sm-6 align-self-center">
                      <span className="new-price">${items.node.price}</span>
                    </div>
                    <div className="col-sm-6 align-self-center">
                      <span className="price">${items.node.newPrice}</span>
                    </div> */}
                    {this.priceWithDiscount(items.node.price, items.node.newPrice)}
                    <div className="col-sm-8 text-right align-self-center">
                      <a
                        href="#"
                        className="Product snipcart-add-item"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={items.node.image === null ? "" : items.node.image.fluid.src}
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                      >
                        <i className="fas fa-shopping-bag" />Ver
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

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
      
      <IndexPost data={data}></IndexPost>
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
          price
          newPrice
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
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



