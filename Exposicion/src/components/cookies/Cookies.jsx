import './Cookies.css';

function Cookies(){
    return (
        <div className="cookies-body" id='cookies'>
            <h1>
                Bienvenido a nuestra Política de Cookies
            </h1>
            <p>
                En Heaven, valoramos tu privacidad y nos esforzamos 
                por brindarte la mejor experiencia posible mientras visitas nuestro 
                sitio web. Es importante para nosotros que entiendas cómo utilizamos 
                las cookies y otras tecnologías similares para mejorar tu experiencia
                en línea.       
            </p>
            <h2>
                ¿Qué son las cookies?    
            </h2>
            <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
                visitas un sitio web. Estos archivos contienen información que se utiliza para 
                recordar tus preferencias y mejorar la funcionalidad del sitio. Las cookies pueden ser 
                temporales (se borran cuando cierras tu navegador) o persistentes (se mantienen en tu 
                dispositivo durante un período de tiempo determinado).
            </p>
            <h2>
                ¿Por qué utilizamos cookies?
            </h2>
            <p className='list'>
                ◇ Mejora de la experiencia del usuario: Las cookies nos ayudan a personalizar tu 
                experiencia en nuestro sitio web, recordando tus preferencias y ajustes.
            </p>
            <p className='list'>
                ◇ Análisis y rendimiento: Utilizamos cookies para recopilar datos sobre cómo 
                interactúas con nuestro sitio, lo que nos ayuda a mejorar su funcionamiento y 
                rendimiento.
            </p>
            <p className='list'>
                ◇ Publicidad personalizada: Algunas cookies nos permiten mostrarte publicidad 
                relevante según tus intereses y comportamiento de navegación.
            </p>
            <img src="./images/cookies.gif" alt="cookies"/>
        </div>
    )
}

export default Cookies;