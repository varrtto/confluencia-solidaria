import React, { Component } from "react";
import Img from "gatsby-image";
// import fondonqn from "../images/fondonqn.jpg"
import { StaticQuery, graphql, Link } from "gatsby";


export default class Product extends React.Component {

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

    const items  = this.props.item;

    return (
    
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
                href={items.node.mercadopago}
                target="_blank"
                className="Product snipcart-add-item"
                data-item-id={items.node.slug}
                data-item-price={items.node.price}
                data-item-image={items.node.image === null ? "" : items.node.image.fluid.src}
                data-item-name={items.node.name}
                data-item-url={`/`}
              >
                <i className="fas fa-shopping-bag" />Comprar
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    );
  }
}
