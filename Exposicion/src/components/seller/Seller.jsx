import "./Seller.css";

function Seller() {
    return (
        <div className="seller-content">
            <p>If you want to buy then thats it.</p>
            <p>But if you want to sell follow these steps:</p>
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
                        - Complete the transaction
                    </p>
                    <img src="./images/transaction.gif" alt="complete"/>
                </div>
            </div>
        </div>
    )
}

export default Seller;