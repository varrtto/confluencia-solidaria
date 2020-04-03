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
    <SEO></SEO>
    <div className="container">
      <div className="col-sm-12 col-md-12 text-center center-block">
        <Link className="header-logo" to="/">
          <img src={logo}></img>
        </Link>
      </div>
      <nav class="navbar column navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse center-block" id="navbarNav">
          <ul class="navbar-nav" style={{"width": "100%", "justifyContent": "center"}}>
            <li class="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/store">
                Ver Vouchers
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about">
                Preguntas Frecuentes
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contacto
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/negocio">
                Sumar Voucher
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
