import React, { useContext } from 'react';
import { Link } from "react-router-dom"

// Components
import Cart from './Shared/Cart';

// Context
import { CartContext } from './Context/CartContextProvider';

import styles from "./ShopCart.module.css"

const ShopCart = () => {

    const { state, dispatch} = useContext(CartContext)
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.product} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items: </span>{state.itemsCounter}</p>
                    <p><span>Total Payments: </span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button className={styles.checkout} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go back to shop!</Link>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked out successfully!</h3>
                    <Link to="/products">Buy more!</Link>
                </div>
            }

        </div>
    );
};

export default ShopCart;