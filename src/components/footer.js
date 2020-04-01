import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="footer_inner">
                    <div className="container">
                        <div className="footer-widget footer-content">
                        </div>
                        <div className="footer-bottom social-right-menu ">
                            <div className="site-info">
                                ©2020 Confluencia Solidaria. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
