import Gallery from "../../components/image-gallery/Gallery";
import "./Home.css"

function Home(){
    return(
        <>

            <div className="home-intro">
                <img className="fondo" src="./images/fondo.jpg" alt="" />
                <div className="home-header">
                    <h1 className="home-header-title">EXPO</h1>
                    <div className="home-header-options">
                        <h1>About us</h1>
                        <h1>Contact us</h1>
                    </div>
                </div>
                <h2 className="slogan">ENJOY THE VIEW</h2>
            </div>
            <Gallery/>
        </>
    )
}

export default Home;