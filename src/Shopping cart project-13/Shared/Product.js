// State = سبد خرید
// productData = کل اطلاعات مربوط به دیتا (محصول)
// payLoad = یه آبجکت حاوی مشخصات محصولی که کاربر انتخاب کرده

import React, { useContext } from 'react';
import {Link} from "react-router-dom"

// Function
import { shorten, isInCart, quantityCount } from '../Helpers/functions';

// Context
import { CartContext } from "../Context/CartContextProvider"

// Icon
import trashIcon from "../Assets/icons/trash.svg"

import styles from "./Product.module.css"

// پروداکتس دیتا میشه همون پراپسِ پروداکتس که همه‌ی اطلاعات داخلشه
// که دیی استراکچرش میکنیم
const Product = ({productData}) => {

    // اونور ولیو ما توی کارت-کانتکس یه آبجکت بود
    // اینجا استیت و دیس-پچ رو دی استراکچر میکنیم

    // State = سبد خرید
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='product'/>
            {/* شورتن میاد تایتل رو میگیره و 2 کلمه رو ریترن میکنه */}
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {/* روی هر محصولی کلیک شد اونو بفرست به ایدی همون محصول */}
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash"/></button>}
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {/* مساوی یک؛ ریمو رو بذارم */}
                    {
                        // اگه ترو بود ؟
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        // اگه فالس بود :ء
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>  
                        }
                </div>
            </div>
        </div>
    );
};

export default Product;

