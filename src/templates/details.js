import React, {Component} from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StarRatingComponent from 'react-star-rating-component';

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ProductDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  
  priceWithDiscount(price, newPrice) {
    if (newPrice > 0) {
      return (
        <>
          <div className="col-sm-6 align-self-center">
            <p><span>Antes:</span> <span className="old-price">${price}</span></p>
            <p><span>Ahora:</span> <span className="price">${newPrice}</span></p>
          </div>
          <div className="col-sm-6 align-self-center">
            
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

  buyComponent() {

  }

  render() {

    console.log(this.props.data)

    const data = this.props.data

    return (
    < Layout >
      <SEO title={data.contentfulProduct.name} keywords={[`gatsby`, `application`, `react`]} />
      <div className="container details-page">
        <div className="product-details">
          <div className="Product-Screenshot">
            {data.contentfulProduct.productMorePhotos === null ? <div className="no-image">Sin imágenes</div> :
              <Tabs>
                {data.contentfulProduct.productMorePhotos.map(items => (
                  <TabPanel key={items.id}>
                    <Tab><img src={items.fixed.src} /></Tab>
                  </TabPanel>
                ))}
                <TabList>
                  {data.contentfulProduct.productMorePhotos.map(items => (
                    <Tab key={items.id}><img src={items.fixed.src} /></Tab>
                  ))}
                </TabList>
              </Tabs>}

          </div>
          <div>
            <h2>{data.contentfulProduct.name}</h2>
          </div>
          {/* <StarRatingComponent
            name="rate1"
            starCount={5}
            value={data.data.contentfulProduct.rating}
          /> */}
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulProduct.details.childMarkdownRemark.html
            }}
          />
          <div className="row buynowinner">
            {this.priceWithDiscount(data.contentfulProduct.price, data.contentfulProduct.newPrice)}
            {/* <div className="col-sm-2">
              <span className="price">Price: ${data.contentfulProduct.price}</span>
            </div> */}
            <div className="col-sm-10 text-left">
              <a
                href={data.contentfulProduct.mercadopago}
                target="_blank"
                className="Product snipcart-add-item"
                data-item-id={data.contentfulProduct.slug}
                data-item-price={data.contentfulProduct.price}
                data-item-image={data.contentfulProduct.image === null ? "" : data.contentfulProduct.image.fixed.src}
                data-item-name={data.contentfulProduct.name}
                data-item-url={`/`}
              >
                <i className="fas fa-tags" />
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout >
    )
  }
}

// export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
      contentfulProduct(slug: {eq: $slug }) {
      id
      name
    slug
      image {
      fixed(width: 1120, height: 500) {
      width
          height
    src
    srcSet
  }
}
mercadopago
price
newPrice
details {
      childMarkdownRemark {
    html
  }
}
productMorePhotos {
  id
  fixed(width: 1120, height: 600){
    src
  }
}
rating
}
}
`
