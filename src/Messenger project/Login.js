import React from 'react';
import google from "./Assets/google.svg";
import styles from "./Login.module.css";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import auth from "./Firebase"

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Botogram!</h2>
                <div className={styles.button}

                    // میایم آوث پروایدر روش بهش میدیم. آوثتنتیکشن رو فراهم میکنه
                    // بعد از کلیک، گوگل لیست ایمیل هارو میاره بعد گوگل میکنه طبق لیست ایمیل رو انتخاب کن
                    // ما میخوایم ثبت نام توسط گوگل انجام بشه
                    // ساین این ویز ریدایرکت مارو ریدایرکت میکنه به صفحه گوگل، که گوگل اجازه بده ثبت نام کنیم
                     onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <img src={google} alt="google"/> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;