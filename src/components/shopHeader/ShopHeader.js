import React from "react";

const styles = {
    shopHeader: {
        borderBottom: "1px solid #e5e5e5",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between"
    },
    logo: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "2.5rem",
        paddingLeft: "2rem"
    },
    shoppingCart: {
        alignSelf: "center",
        fontSize: "1.3rem",
        paddingRight: "2rem",
    },
    cartIcon: {
        fontSize: "2.2rem",
        color: "cadetblue",
        marginRight: "10px"

    }
};

const ShopHeader = ({ numItems, total }) => {
    const { shopHeader, logo, shoppingCart, cartIcon } = styles;
    return (
        <header style={shopHeader} className="row">
            <a href="#" style={logo} className="text-dark">Books Shop</a>
            <a style={shoppingCart}>
                <i style={cartIcon} className="fa fa-shopping-cart" />
                {numItems} items (${total})
      </a>
        </header>
    )
};

export default ShopHeader;
