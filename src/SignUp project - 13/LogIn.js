import React, { useState, useEffect } from 'react';
import styles from "./Login.module.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './Validate';
import { notify } from "./Toast"
import { Link } from 'react-router-dom';
const LogIn = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })


    const [errors, setErrors] = useState({});
    const [touched, setThuched] = useState({});

    useEffect(() => {
        // و تایپ این ساین آپ
        setErrors(validate(data, "login"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    const focusHandler = event => {
        setThuched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            notify("You signed up successfully", "success")
        } else {
            notify("Invalid data", "error")
            setThuched({
                email: true,
                password: true,  
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>LogIn</h2>
                <div className={styles.formField}>
                    <label>Email: </label>
                    <input 
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type='text' 
                        name='email' 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password: </label>
                    <input 
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type='password' 
                        name='password' 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                               
                <br/>
                <div className={styles.formButtons}>
                    <Link to="/signup">Sign in</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>

    );
};

export default LogIn;

// نصب توست
// npm install react-toastify