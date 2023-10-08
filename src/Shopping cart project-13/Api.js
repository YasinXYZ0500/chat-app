import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";



// این فانکشن به صورت ای‌سینک است
const getProducts = async() => {
    // با "اِویت" میگیم منتظر بمون (تا نتیجه بیاد) تا کامل نشده نرو خط بعد
    // اگه اینو نگیم ممکنه بره خط بعد و دیتای نیومده باشه و به ارور بخوریم
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}

// به صورت نیمد اکسپورت میکنیم شاید چندتا فانکشن داشته باشیم
export {getProducts}