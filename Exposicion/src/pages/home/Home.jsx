import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Socials from "../../components/socials/Socials";
import "./Home.css"

function Home(){
    return(
        <>
            <Header/>
            <div className="home-content">
                <div className="main">
                    <h5>Videogames for everyone</h5>
                    <h1>Heaven</h1>
                    <p>Try our web site and find the game you are looking to buy or sell,
                        use it as you wish.
                    </p>
                    <div className="main-button">
                        <a href="#begin" className="btn">Begin now</a>
                    </div>
                </div>
                <div className="main-img">
                    <img src="./images/home.png" alt="home" />
                </div>
            </div>
            <Body/>
            <Footer/>
            <Socials/>
        </>
    )
}

export default Home;