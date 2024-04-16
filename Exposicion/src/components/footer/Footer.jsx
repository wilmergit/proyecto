import "./Footer.css";

function Footer() {
    return (
        <div className="footer-content" id="footer">
            <div className="content">
                <img src="./images/Heaven.png" alt="logo" />
                <div className="links">
                    <a href="#about">About us</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="icons">
                <a href="https://www.instagram.com/"><i class="ri-instagram-fill"></i></a>
                <a href="https://twitter.com/"><i class="ri-twitter-x-line"></i></a>
                <a href="https://github.com/wilmergit"><i class="ri-github-fill"></i></a>
            </div>
            <p>
                Todos los derechos reservados Política de Privacidad y Cookies |
                Condiciones de Venta
            </p>
            <p>© 2024 Heaven</p>
        </div>
    )
}

export default Footer;