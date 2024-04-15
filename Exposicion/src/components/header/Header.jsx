import "./Header.css";

function Header(){
    return (
        <div className="header">
            <a href="#" className="header-logo">
                <img src="./images/logo.png" alt="logo" />
            </a>
            <ul className="header-navbar">
                <li><a href="#">About</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;