import axios from "axios"

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"

// این یه فانکشن ای سینک است
const getCoin = async () => {
    // درخواست کامل شد بعد برو خط بعد
    const response = await axios.get(BASE_URL);
    return response.data;
}

export {getCoin};

// خیلی از ای پی آی ها پجینیت شده هستند
// مثلا فرض کنید یه سری اطلاعات توی دیتابیس هست
// سرور میاد اون اطلاعات رو از دیتابیس میده به شما
// مثلا ممکنه یه سایتی 20 میلیون کاربر داشته باشه اینجا سرور نمیاد همه 20 میلیون رو یکجا بده
// میاد کم کم (پجینیت) اطلاعات رو میده
// مثلا تعیین میکنیم چندتا چندتا بده

// Per page = چندتا چندتا بده
// Page = صفحه شماره 1 صدتای اول بده