// انجام عملیات ثبت نام با فایر-بیس
// فایر-بیس: یه دیتا بیس که میتونیم اطلاعاتمون رو اونجا بذاریم 
// فایر-بیس؛ ابزار گوگلِ
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// با این میتونیم یه اپی رو اینیشیالایز کنیم و عملیات ثبت نام رو انجام بدیم
import "firebase/compat/auth";

// اینیشیالایز بیا یه اپی رو بساز
const auth = firebase.initializeApp({
    apiKey: "AIzaSyBS_NBEC7lY5iHIbQsz8iGCYKtyBvg3M0g",
    authDomain: "botogram-d42bb.firebaseapp.com",
    projectId: "botogram-d42bb",
    storageBucket: "botogram-d42bb.appspot.com",
    messagingSenderId: "1067386470895",
    appId: "1:1067386470895:web:8e482334c150cf41f5761a"
}).auth();

export default auth;