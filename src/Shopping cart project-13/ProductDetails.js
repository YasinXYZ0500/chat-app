import React, {useContext} from 'react';

import { ProductsContext } from './Context/ProductContextProvider';
import { Link } from "react-router-dom"
// import { Link, useParams } from "react-router-dom"

import styles from "./ProductDetails.module.css"

const ProductDetails = (props) => {
    // react-router-dom@6
    // const params = useParams();
    // const id = params.id;

    const id = props.match.params.id;
    const data = useContext(ProductsContext);

    // مقدار پروداکت میشه = دیتا؛ ایندکسِ [ایدیش - 1]
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className={styles.conatiner}>
            <img className={styles.image} src={image} alt="product"/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}$</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;