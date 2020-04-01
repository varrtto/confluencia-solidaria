import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import faq from "../images/faq.png"

class About extends React.Component {
    render() {
        return ( 
            <Layout>
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
            
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <br/>
                    <img src={faq}/>
                    <h2>Preguntas Frecuentes</h2>
                    
                    <br/>
                    <h4>¿Que zonas abarcan?</h4>
                    <p>Queremos ser el punto de referencia de la zona del <b>valle de Neuquén-Rio Negro</b>. Si sos de Buenos Aires entrá a <a href="http://teban.co/">TeBanco.Co</a>  
                    &nbsp;la cual fue la página que nos inspiró a crear esta.</p>
                    <br/>
                    <h4>¿Este servicio tiene algún costo?</h4>
                    <p><b>No</b>, esta plataforma la armamos para ayudar a aquellas personas que están imposibilitadas de ofrecer su servicio/productos por la cuarentena. 
                        Lo que te va a cobrar un porcentaje de la transacción es MercadoPago, mirá en su página cuál será el costo.</p>
                    <br/>
                    <h4>¿Cómo uso mi voucher?</h4>
                    <p>Guardá el comprobante de transacción de MercadoPago, con ese número quien ofrezca el producto/servicio podrá constatar que hiciste el pago. 
                        Igual no te olvides de contactar al emprendedor para avisarle que ya realizaste una preventa 😉</p>
                    <br/>
                    <h4>¿Hasta cuándo puedo usar mi voucher?</h4>
                    <p>Esa información está <b>publicada en las descripciones de cada voucher</b>. 
                        Si tenés alguna duda, escribile a quién ofrece el servicio a los contactos que proporciona.</p>
                    <br/>
                    <h4>¿Qué pasa si no cumplen con lo prometido?</h4>
                    <p><a href="/">Confluenciasolidaria.com</a> es una plataforma gratuita sin objetivo de lucro, es creada para aquellas personas que no pueden ofrecer su trabajo en este momento, no podemos hacernos cargo del cumplimiento de los mismos. 
                        Comprá el voucher si confías en ellos, podés contactarlos por las vías de comunicación que ofrecen.</p>

                    <br/>
                    <h4>¿Por qué hacen esta plataforma si no ganan nada?</h4>
                    <p>Con la medida del aislamiento nos cuidamos la salud entre tod@s pero tambien hay muchas personas que ven gravemente 
                        afectada su situación económica. Sabemos que no le vamos a resolver los problemas a esas personas, pero al menos, entre todos, 
                        los ayudamos a que puedan cubrir sus gastos fijos del mes.</p>

                    <br/>
                    <h4>Si no soy del valle y quiero publicar una preventa?</h4>
                    <p>Si no sos de la zona y ésta herramienta te viene bien, te recomendamos publicar tu voucher en la página <a href="http://teban.co/">TeBanco.Co</a> que es otra herramienta solidaria  que incluye otras zonas del país!</p>

                    <br/>
                    <h4>Agradecimientos y gente que hizo esto posible</h4>
                    <p>Queremos agredecer a las chicas de <a href="http://teban.co/">TeBanco.Co</a> por tener tan buena idea y dejarnos copiar varios de los texts
                    de esta página para poder sacarla lo más rápido posible.</p>




                </div>
            </div>
        </div> 
        </ Layout>
        )
    }
}
export default About
