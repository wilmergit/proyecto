import Buttons from "../buttons/Buttons";
import Cards from "../cards/Cards";
import ImageList from "../imageList/ImageList";
import Stt from "../stt/Stt";
import "./Body.css";

function Body(){
    return (
        <>
            <div className="body-content">
                <div className="about" id="about">
                    <h5>Build your brand</h5>
                    <p>
                        Create your own market of videogames or buy them
                        from your home, dont worry about delivery, we'll
                        do it for you!
                    </p>
                    <img src="./images/searching.gif" alt="searching"/>
                    <h5>Why Heaven?</h5>
                    <p>
                        Whe are proud to say we are the only company focused
                        on videogames only providing free shipping and easy
                        contact between client and provider.
                    </p>
                </div>
                <div className="explanation" id="begin">
                    <h5>Lets begin</h5>
                    <p>First, you have to choose whether you want to buy 
                        or sell.
                    </p>
                    <Buttons/>
                    <p>Then, choose the genre or category for the game
                        and later the game itself.
                    </p>
                    <ImageList/>
                </div>
                <Cards/>
            </div>
            <Stt/>
        </>
    )
}

export default Body;