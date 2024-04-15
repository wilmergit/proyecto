import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <div className="card" id="kh">
                <p className="heading">
                    Adventure
                </p>
            </div>
            <div className="card" id="dmc">
                <p className="heading">
                    Hack and Slash
                </p>
            </div>
            <div className="card" id="forza">
                <p className="heading">
                    Racing
                </p>
            </div>
            <div className="card" id="tekken">
                <p className="heading">
                    Fighting
                </p>
            </div>
        </div>
    )
}

export default Cards;