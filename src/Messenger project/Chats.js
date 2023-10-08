import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import styles from "./Chats.module.css"
import auth from "./Firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine"
import { AuthContext } from "./Context/AuthContextProvider";
import axios from "axios";


const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext)
    const history = useHistory();

    // با یوزافکت
    // چک میکنیم ببینیم کاربر قبلا اومده توی برنامه یا نه - یه حساب کاربری ایجاد شده داخل چت انجین یا نه
    // اگه "حساب کاربری نداشت" باید بیایم یه حساب کاربری براش درست بکنیم
    // وقتی حساب نداشت اونو بفرست به /چت‌س

    // این اطلاعات برای ایجاد اکانت رو از "یوزر" میگیریم، و پستش بکنیم به سمت چت انجین
    // بعد از ایجاد اکانت
    // لودینگ رو "فالس میکنیم" و صفحه چت رو بهش نشون میدیم
    useEffect(() => {
        if(!user){
            history.push("/")
            return;
        }
        axios.get("https://api.chatengine.io/users/me", {
            // اینجا باید بهش بفهمونیم دنبال چه اطلاعاتی باشه
            headers: {
                "project-id": "e72694d2-a7c7-4ae5-a438-c0e709418b4e",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        // اگه "حساب کاربری داشت"، بیا (ست لودینگ) رو "فالس" کن
        .then(() => {
            setLoading(false)
        })
        // اگه حساب کاربری نداشت
        .catch(() => {
            // فرم دیتا: تو این فرم دیتا میایم "اطلاعات کاربر" رو بهش میدیم
            // که بره توی چت انجین یه حساب کاربری براش درست کنه
            // با "اَپند" اطلاعات رو داخلش وارد میکنیم
            let formData = new FormData();
            formData.append("email", user.email);
            formData.append("usernme", user.email);
            formData.append("secret", user.uid);

            // عکس رو که گرفتی بیا با .دن اونو "اَپند" کن داخل فرم دیتا
            getFile(user.PhotoURL)
                .then(avatar => {
                    formData.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users", formData, {
                        headers: {
                            "private-key": "ced5570b-0cda-4230-b257-37ecbfb0fc5b"
                        }
                    })
                    // اگه همه چی با موفقیت انجام شد، باید لودینگ رو فالس کنیم که دیگه نباشه
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    }, [user, history])

    const getFile = async (url) => {
        const response = await fetch(url);
        
        // بلاب یه فایلی است شبیه آبجکت‌ها که یسری اطلاعات داخلشِه
        // مثلا: اطلاعات یه عکس داخلشه
        // که باید اونارو بگیریم و فایلشون رو درست کنیم و تبدیل به فایل عکس کنیم - مستقیم خودِ عکس رو نمیده
        const data = await response.blob();
        // ریترن کن یه فایلی رو که ورودیش دیتاست که عکس داخلشه
        // و اسم عکس رو بذار: یوزر-فوتو
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    // این عملیات ساین اوت شاید طول بکشه برای همین به صورت ای سینکرونوس مینویسیم
    const logoutHandler = async () => {
        await auth.signOut();
        // وقتی ساین اوت تموم شد بیا مارو پوش کن داخل صفحه لاگین
        history.push("/");
    }

    if (!user || loading) return "Loading..."

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine
                height="calc(100vh - 50pc)"
                projectID="e72694d2-a7c7-4ae5-a438-c0e709418b4e"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}

export default Chats;