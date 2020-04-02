import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import formImg from "../images/form.png"

class Contact extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Agregar Oferta" keywords={[`formulario`, `cuarentena`, `comprar`]} />
                <div className="Contact-us">
                    <div className="container">
                        <h2>Completá el Formulario</h2>
                        <p>
                            Envíanos los datos de tu negocio, y de la oferta que querés que publiquemos GRATIS!
                            Una vez que lo recibamos y validemos, lo subiremos enseguida a la página y estará disponible para todo el que lo quiera comprar.

                            Es opcional (pero conveniente) que tengas un link de pago de MercadoPago para poder recibir tu dinero. &nbsp;&nbsp;
                            <a href="https://blog.mercadopago.com/2017/07/21/cobra-por-email-chat-y-redes-sociales-a-traves-de-mercado-pago/">Acá tenés un tutorial.</a>
                        </p>

                        <h4>Hacé click en la siguiente imágen para ir al formulario 😉</h4>
                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd28xkohHYSIj15hHewDQnu90cUvV-wmWtCUNVzt-6IF6YzOQ/viewform"><img src={formImg}/></a>
                        
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Contact
