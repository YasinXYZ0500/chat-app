import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import auth from '../Firebase';

export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

    // استیت برای اینکه بفهمیم اطلاعات داره میاد یا نه - حالت اولیه‌اش تروعه (هیچ اطلاعاتی نیومده)
    // بعد از اینکه اطلاعات اومد "لودینگ رو فالس" میکنیم
    const [loading, setLoading] = useState(true);

    // اطلاعات کاربری که ثبت نام کرده رو میگیریم
    const [user, setUser] = useState(false);

    // با این، کاربر رو نویگیت میکنیم داخل یه مسیر دیگه
    const history = useHistory();

    useEffect(() => {
        // آن اوث استیت یه فانکشن به عنوان ورودی میگیره
        // وظیفه‌اش؟ اگه استیت آوث ما تغییر کرد بیا یه کاری رو انجام بده
        // وقتی اطلاعات اومد، بیا اطلاعات کاربر رو بگیر 

        // و توی یوزر، ست‌ش کن
        // لودینگ رو فالس کن
        // اگه یوزر وجود داشت هیستوری بیا کاربر رو پوش کن به صفحه‌ی /چت
        // ایف اگه یه خط باشه میتونیم بدون آکلاد بنویسیم

        // دیپندنسی:
        // 1- هر موقع [استیت یوزر] تغییر کرد
        // 2- و هرموقع کاربر از مسیری به مسیری دیگه رفت
        // این یوز-افکت اجرا بشه و اگه اطلاعاتی قرار بود گرفته بشه اونارو بگیره
        auth.onAuthStateChanged(user => {
            setUser(user);
            console.log(user)
            setLoading(false);
            if (user) history.push("/chats");
        }, [user, history])
    })

    // اگه کاربر اطلاعاتش نیومده بود یا داره بارگذاری میشه  بیا یه استرینگ لودینگ بهش نشون بده
    if(!user || loading) return "Loading..."

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>

    );
};

export default AuthContextProvider;