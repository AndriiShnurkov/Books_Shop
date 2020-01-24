import React from "react";

const styles = {
    total: {
        textAlign: "right",
        fontSize: "1.3rem",
        marginRight: "10px",
    },
    button: {
        marginLeft: "5px",
        marginTop: "5px"
    }
}
const ShoppingCartTable = () => {
    const { total, button } = styles;
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site ...</td>
                        <td>2</td>
                        <td>$ 350</td>
                        <td>
                            <button style={button} className="btn btn-outline-danger">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button style={button} className="btn btn-outline-success">
                                <i className="fa fa-trash-circle" />
                            </button>
                            <button style={button} className="btn btn-outline-warning">
                                <i className="fa fa-trash-circle" />
                            </button>


                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={total}>
                Total: $ 650
            </div>
        </div>
    )
};

export default ShoppingCartTable;
