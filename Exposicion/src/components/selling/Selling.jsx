import "./Selling.css";

function Selling() {
    return (
        <div className="seller-content">
            <h1>For the sellers</h1>
            <div className="membership" id="membership">
                <div className="one">
                    <p>
                        - Become a member
                    </p>
                    <img src="./images/Id.gif" alt="member"/>
                </div>
                <div className="two">
                    <p>
                        - Take some photos of the game
                    </p>
                    <img src="./images/photos.gif" alt="photos"/>
                </div>
                <div className="three">
                    <p>
                        - Fill up the information
                    </p>
                    <img src="./images/documents.gif" alt="complete"/>
                </div>
                <div className="four">
                    <p>
                        - Complete the transaction
                    </p>
                    <img src="./images/transaction.gif" alt="complete"/>
                </div>
            </div>
        </div>
    )
}

export default Selling;