import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
import SEO from "../components/seo"
import logo from "../images/confluencia-logo.png"



const Header = ({ siteTitle }) => (
  <header className="site-header">
    <SEO>
    </SEO>
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-4 align-self-center">
          <Link className="header-logo" to="/"><img src={logo}></img></Link>
        </div>
        <div className="col-sm-8 col-md-8 align-self-center text-center">
          <nav>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">Ver Vouchers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Preguntas Frecuentes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/negocio">Sumar Voucher</Link>
              </li>
            </ul>
            {/* </nav>div className="header-cart">
              <Link className="Header__summary snipcart-summary snipcart-checkout" to="#">
                <i className="fas fa-cart-plus"></i>
              </Link>
            </div> */}
          </nav>
        </div>
      </div>
    </div>

  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
