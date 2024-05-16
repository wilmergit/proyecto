import { useCookies } from 'react-cookie';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import './CookieHandler.css';


Modal.setAppElement('#root');

function CookieHandler() {


    const [cookies, setCookie] = useCookies(['userConsent']);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (!cookies.userConsent) {
            setModalIsOpen(true);
        }
    }, [cookies]);

    const acceptCookies = () => {
        setCookie('userConsent', true, { path: '/' });
        setModalIsOpen(false);
    };

    return (
        <div className="cookies-container">
            <Modal className={'modal'} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Cookie Consent">
                <h2>Esta web utiliza cookies para mejorar tu experiencia.</h2>
                <p>Esta tecnologia nos permite lo siguiente:</p>
                <p className='points'>Personalización: </p>
                <p>Permiten que los sitios web recuerden tus preferencias,
                    como el idioma o la configuración de tema, para que no tengas que
                    ajustarlas cada vez que visitas la página.
                </p>
                <p className='points'>Experiencia de usuario mejorada:</p>
                <p>
                    Guardan información de tus sesiones
                    anteriores, como el contenido de tu carrito de compras en una tienda
                    online, lo que facilita y agiliza tus futuras visitas.
                </p>
                <p className='points'>Inicios de sesión automáticos: </p>
                <p>
                    Mantienen tu sesión iniciada en sitios
                    que visitas frecuentemente, evitando que tengas que ingresar tu usuario
                    y contraseña cada vez.
                </p>
                <div className='buttons-cookies'>
                    <button className='cookie-button' onClick={acceptCookies}>Aceptar</button>
                    <button className='cookie-button'>Rechazar</button>
                </div>
            </Modal>
        </div>
    )
}

export default CookieHandler