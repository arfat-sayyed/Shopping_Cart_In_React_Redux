import React from 'react';

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG42.png" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://img.favpng.com/5/4/25/apple-iphone-x-silicone-case-iphone-8-samsung-galaxy-s9-smartphone-png-favpng-rgHxS5nLd4P2DeCABCJmR3B0S.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        i-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;