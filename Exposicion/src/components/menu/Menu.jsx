import './Menu.css'
import { useState } from "react";

function Menu(){

    const[state, setState] = useState(true);

    const changeState = () => {
        if (state == true)
        {
            setState(false);
        }
        else{
            setState(true);
        }
    }

    return (
        <>
            <div className="menu">
                <button onClick={changeState} className="menu-button">Discover</button>
            </div>
            <div className={state ? 'drop-down-menu drop-down-menu-hidden' : 'drop-down-menu drop-down-menu-visible'}>
                <button onClick={changeState} className="close-menu">x</button>
                <div className='drop-down-menu-items'>
                    <li>About us</li>
                    <li>Contact</li>
                </div>
            </div>
        </>
    )
}

export default Menu;