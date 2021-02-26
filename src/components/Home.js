import React from 'react';

function Home(props) {
    console.warn("Props",props.data);
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
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
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'iPhone 11'})}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;