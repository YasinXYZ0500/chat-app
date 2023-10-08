import React, { useState, useEffect } from 'react';
import "./SignUp.module.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './Validate';
import { notify } from "./Toast"

const SignUp = () => {

    // یوز استیت من یه آبجکت است که همه‌ی اطلاعات فرم رو داخلش میریزیم
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    // برای ولیدیشن باید استیتی رو تعریف کنیم
    // ابجکت ارور رو که به ما میده رو باید داخل استیتی ذخیره‌اش کنیم
    const [errors, setErrors] = useState({});

    // میخوایم وقتی ارور نمایش داده بشه که روی اینپوت فوکوس میشه
    const [touched, setThuched] = useState({});
//  const [touched, setThuched] = useState ({
//      name: true,
//      email: true
//   });

    // اعتبارسنجی رو دیتا با استفاده از "ولیدیتی" که درست کردیم
    // با یوزافکت میگیم هرموقع "دیتا" تغییر کرد بیا با "ست-اِرور" روی دیتا ولیدیشن انجام بده
    // آقای دیتا شما باید طبق قوانین ولیدیت باشی
    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])

    // برای بقیه 'ولیو' رو میگیریم ولی برای 'چک-باکس' چکد رو میگیریم
    const changeHandler = event => {

        // اگه "ایونت.تارگت.نیم" برابر با "ایز-اَکسپتد" بود بیا ست دیتا کن
        if (event.target.name === "isAccepted"){

            // برای اینکه "مقدار چک باکس" رو بگیرم که ببینم روش کلیک کرده یانه باید بنویسیم: چکد
            // که هربار "ترو فالس" میده
            // اگه چکد بود اینکارو انجام بده، که میاد داخل استیت دیتا، مقدار "ایز اکسپتد" رو تغییر میده
            setData({...data, [event.target.name]: event.target.checked})
        
            // ولی برای بقیه آیتم‌ها (اینپوت) به صورت "ایونت.تارگت.ولیو" ست دیتا کن
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    const focusHandler = event => {
        // وقتی روش کلیک کردیم ترو میشه و داخل "آبجکت تاچ" یه کی ولیو ساخته میشه
        setThuched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            // اینجا تایپ نوتیفای رو مشخص میکنیم
            notify("You signed in successfully", "success")
        } else {
            notify("Invalid data", "error")
            setThuched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className="items">
            <form onSubmit={submitHandler}>
                <h2>SignUp</h2>
                <div>
                    <label>Name: </label>
                    <input 
                    type='text' 
                    name='name' 
                    value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                    {/* اگه ارور وجود داشت، و هم تاچ شده بود بیا ارور رو داخل یه اسپن بذار و نمایشش بده */}
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                    type='text' 
                    name='email' 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                    type='password' 
                    name='password' 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input 
                    type='password' 
                    name='confirmPassword' 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>I accept terms od privacy policy</label>
                    <input 
                    type='checkbox' 
                    name='isAccepted' 
                    value={data.isAccepted} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <br/>
                <div>
                    <label>Login</label>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>

    );
};

export default SignUp;

// نصب توست
// npm install react-toastify