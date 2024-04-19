import "./Header.css";

function Header(){
    return (
        <div className="header">
            <a href="/home" className="header-logo">
                <img src="./images/Heaven.png" alt="logo" />
            </a>
            <ul className="header-navbar">
                <li><a href="/home#about">About</a></li>
                <li><a href="/membership">Membership</a></li>
                <li><a href="/home#footer">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;