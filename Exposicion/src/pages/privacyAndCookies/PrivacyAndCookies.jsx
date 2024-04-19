import Cookies from "../../components/cookies/Cookies";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Privacy from "../../components/privacy/Privacy";

function PrivacyAndCookies(){
    return (
        <>
            <Header/>
            <Cookies/>
            <Privacy/>
            <Footer/>
        </>
    )
}

export default PrivacyAndCookies;