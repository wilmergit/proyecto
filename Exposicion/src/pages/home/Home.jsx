import Header from "../../components/header/Header";
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
                        <a href="#" className="btn">Begin now</a>
                    </div>
                </div>
                <div className="main-img">
                    <img src="./images/home.jpeg" alt="home" />
                </div>
            </div>

            <div className="icons">
                <a href="https://www.instagram.com/"><i class="ri-instagram-fill"></i></a>
                <a href="https://twitter.com/"><i class="ri-twitter-x-line"></i></a>
                <a href="https://github.com/wilmergit"><i class="ri-github-fill"></i></a>
            </div>
        </>
    )
}

export default Home;