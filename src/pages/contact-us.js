import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Contacto" keywords={[`contacto`, `confluencia`, `solidaria`]} />
                <div className="Contact-us">
                    <div className="container">
                        {/* To make form work, use your own formspree credentials in action="" */}
                        <h2>Dejanos tu opinión</h2>
                        <p>
                            Escribinos por cualquier duda, consulta o mejora que creas podamos hacerle al sitio.
                        </p>
                        <form action="https://formspree.io/xqkdzdnk" method="POST" name="contact">
                            <div>
                                <label>Tu Nombre: </label>
                                <input type="text" name="name" />
                            </div>
                            <div>
                                <label>Tu Email: </label>
                                <input type="email" name="email" />
                            </div>
                            <div>
                                <label>Mensaje: </label>
                                <textarea name="message"></textarea>
                            </div>
                            <div>
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Contact
