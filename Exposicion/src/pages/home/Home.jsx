import Gallery from "../../components/image-gallery/Gallery";
import Menu from "../../components/menu/Menu";
import "./Home.css"

function Home(){
    return(
        <>

            <div className="home-intro">
                <img className="fondo" src="./images/fondo.jpg" alt="" />
                <div className="home-header">
                    <h1 className="home-header-title">EXPO</h1>
                    <Menu/>
                </div>
                <h2 className="slogan">ENJOY THE VIEW</h2>
            </div>
            <Gallery/>
        </>
    )
}

export default Home;