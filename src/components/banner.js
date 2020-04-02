import React, { Component } from "react";
import Img from "gatsby-image";
// import fondonqn from "../images/fondonqn.jpg"
import { StaticQuery, graphql, Link } from "gatsby";


export default class Banner extends React.Component {
  render() {

    const { data } = this.props;

    return (
      <div className="slider-section">
          {/* {BannerData.map((items, i) => ( */}
            <div className="item">
              <div className="site-Banner">
                <Img fluid={this.props.image}/>
                <div className="Banner-details">
                  <div>
                    <h1>{this.props.heading}</h1>
                    <span className="sub-title">{this.props.subHeading}</span>
                    <p><br/><Link to="/store">Comprar Ahora!</Link></p>
                  </div>
                </div>
              </div>
            </div>
          {/* ))} */}
      </div>
    );
  }
}
