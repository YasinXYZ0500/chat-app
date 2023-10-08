

import React, { useState, useEffect, createContext, useContext } from 'react';

// API
import { getProducts } from '../Api.js'

export const ProductsContext = React.createContext();

const ProductContextProvider = ({children}) => {

    // ورودی "یوز استیت" یه آرایه میدیم چون دیتای که داره از "ای‌پی‌آی" میاد آرایه از آبجکت هاست
    const [products, setProducts] = useState([]);

    
    // وقتی یه فانکشن رو تعریف میکنید که "داخلش دارید از یوزافکت" استفاده میکنید
    // بیاید اونو داخل خودِ "یوزافکت" تعریف کنید
    
    // چون "فچ-اِی‌پی‌آی" داره فانکشنی که داخلشه داره از ای سینک اویت استفاده میکنه
    // باید خودش رو هم به صورت ای سینکرونوس بنویسیم
    
    // از "یوزافکت" استفاده میکنیم و میگیم وقتی سایت مانت شد دیتا رو از این "اِی‌پی‌آی گت-پروداکتس" بگیر
    useEffect(() => {
        const fetchAPI = async() => {
            //  صبر کن تا اطلاعات "گت-پروداکتس" برگرده بعد اونارو ست کن داخل پروداکتس
            setProducts(await getProducts());
        }

        fetchAPI();
    }, []);


    return (
        // ولیوش محصولاتیِ که از طریق ای پی آی گرفتیم

        // پروداکتس کانتکس.پرووایدر رو هرچی رَپ شد بیا اونارو بگیر و بذار وسط
        // و وقتی اونارو میذاره این وسط، همه‌ی این کامپوننت های وسط به این ولیو دسترسی پیدا میکنن

        // میخوایم "پروداکتس-کانتکس.پرووایدر" رو ببریم داخل "اَپ" و بپیچیم دور کامپوننت‌ها
        // پس باید کامپوننت هارو بگیرم و بریزم این وسطش
        // و خودش بیاد کارو روشون انجام بده و کانتکس رو بهشون پاس بده
        // پس باید اونارو به صورت پراپس بگیرم
        
        <ProductsContext.Provider value={products}>
            {children}
        {/*  <Store/> */}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;


