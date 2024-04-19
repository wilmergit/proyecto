import './Privacy.css';

function Privacy(){
    return (
        <div className="privacy-body" id='privacy'>
            <h1>
                Política de Privacidad
            </h1>
            <p>
                En Heaven, estamos comprometidos con la protección de tu privacidad y la seguridad de 
                tus datos personales. Esta Política de Privacidad describe cómo recopilamos, 
                utilizamos y protegemos la información que obtengamos cuando visitas nuestro sitio web 
                o utilizas nuestros servicios relacionados con la venta de videojuegos.      
            </p>
            <h2>
                Información que recopilamos    
            </h2>
            <p>
                Cuando visitas nuestro sitio web o realizas una compra, podemos 
                recopilar cierta información personal, que puede incluir, 
                entre otros, los siguientes datos:
            </p>
            <p className='list'>
                ◇ Información de contacto, como nombre, dirección de correo 
                electrónico y número de teléfono.
            </p>
            <p className='list'>
                ◇ Información de pago, como detalles de tarjetas de crédito o 
                débito.
            </p>
            <p className='list'>
                ◇ Información demográfica, como edad, género y ubicación.
            </p>
            <p className='list'>
                ◇ Datos de registro, como dirección IP, tipo de navegador y 
                páginas visitadas.
            </p>
            <p className='list'>
                ◇ Información sobre tus preferencias y comportamiento de compra.
            </p>
            <h2>
                Uso de la información
            </h2>
            <p className='list'>
                ◇ Procesar tus pedidos y proporcionarte los productos y servicios solicitados.
            </p>
            <p className='list'>
                ◇ Mejorar y personalizar tu experiencia en nuestro sitio web.
            </p>
            <p className='list'>
                ◇ Enviar correos electrónicos informativos sobre ofertas especiales, 
                promociones y nuevos lanzamientos de videojuegos.
            </p>
            <h2>
                Seguridad de la información
            </h2>
            <p>
                Nos comprometemos a proteger la seguridad de tu información personal. Implementamos 
                medidas técnicas, administrativas y físicas para prevenir el acceso no autorizado, la divulgación, la alteración o la destrucción de tus datos.
            </p>
            <img src="./images/privacy.gif" alt="privacy"/>
        </div>
    )
}

export default Privacy;