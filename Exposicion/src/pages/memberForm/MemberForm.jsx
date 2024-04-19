import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MemberForm.css";

function MemberForm() {
    return (
        <>
            <Header />
            <div className="memberForm-container">
                <div className="memberForm-form">
                    <div className="inputs">
                        <input type="text" placeholder="Nombre" />
                        <input type="text" placeholder="Primer Apellido" />
                        <input type="text" placeholder="Segundo Apellido" />
                        <input type="number" placeholder="Edad"/>
                        <input type="text" placeholder="Correo electronico" />
                    </div>
                    <div className="joinButton">
                        <button>Join Heaven</button>
                    </div>
                </div>
                <div className="image">
                    <img src="./images/member.gif" alt="member" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MemberForm;