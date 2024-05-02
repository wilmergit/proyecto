import { useState } from "react";
import "./Menu.css";

function Menu(){

    const [visible, setVisible] = useState(false);

    const changeState = () => {
        setVisible(visible ? false : true);
    }

    return (
        <div className="menu">
            <i onClick={changeState} id="menu-icon" className="fa-solid fa-bars"></i>

            <div className={visible ? "side-menu show" : "side-menu"}>
                <i onClick={changeState} id="close-menu" className="fa-solid fa-x"></i>
                <ul className="menu-options">
                    <li><a href="/home#about">About</a></li>
                    <li><a href="/membership">Membership</a></li>
                    <li><a href="/home#footer">About us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;