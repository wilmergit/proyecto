import "./Footer.css";

function Footer() {
    return (
        <div className="footer-content" id="footer">
            <div className="content">
                <img src="./images/Heaven.png" alt="logo" />
                <div className="links">
                    <a href="/home#about">About us</a>
                    <a href="/home#contact">Contact</a>
                </div>
            </div>
            <div className="footer-icons">
                <a href="https://www.instagram.com/"><i class="ri-instagram-fill"></i></a>
                <a href="https://twitter.com/"><i class="ri-twitter-x-line"></i></a>
                <a href="https://github.com/wilmergit"><i class="ri-github-fill"></i></a>
                <a href=""><i class="fa-solid fa-rss"></i></a>
            </div>
            <p>
                All rigths reserved
            </p>
            <div>
                <a href="/cookiesAndPrivacy#cookies">Cookies |</a>
                <a href="/cookiesAndPrivacy#privacy"> Privacy</a>
            </div>
            <p>© 2024 Heaven</p>
        </div>
    )
}

export default Footer;