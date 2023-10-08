// این فایل قراره همه‌ی محصولات رو نشون بده

// productData={product}
// پروداکت کلی میشه کل اون اطلاعات محصول (ایدی، تایتل، پرایس و...)

import React, {useContext} from 'react';

// Components
import Product from './Shared/Product.js';

// Context
import { ProductsContext } from "./Context/ProductContextProvider.js"

// Style
import styles from "./Store.module.css"

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        // استایل موقت برای محصولات
        <div className={styles.container}>
            {
                // بیا روی پروداکتس که همه محصولات گرفته شده از ای‌پی‌آی داخلشن رو بگیر و روشون مَپ بزن
                products.map(product => <Product 
                    key={product.id} 
                    productData={product}
    // پروداکت کلی میشه هرکدوم از آیتم‌ها که شامل کلِ اطلاعات محصول (ایدی، تایتل، پرایس و...) میشه
    // این "پروداکت-دیتا" میشه => (پراپسِ کامپوننت پروداکتِ) که همه‌ی اطلاعات محصول که از پروداکتس اومده داخلشه

                />)
            }
        </div>
    );
};

export default Store;