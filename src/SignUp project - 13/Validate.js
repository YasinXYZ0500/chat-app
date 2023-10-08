// میخوایم یه فانکشنی بسازیم که مقادیر داخل استیت دیتا رو بگیره و اونارو اعتبارسنجی کنه
// فانکشن ولیدیت باید مقداری (ورودی) رو بگیره که در اینجا "استیت دیتا" رو بهش میدیم

// مقدارشون رو بررسی میکنه که ببینه با شرط سازگاره یا نه

// و در نهایت یه آبجکت اروری رو به ما میده که دقیقا شبیه استیت دیتاست که میگه
// اگه این فیلد رو پر نکردی باید پرش کنی


export const validate = (data, type)  => {

    // آبجکت اِرورز
    const errors = {};
    // const errors = {
    // name: "Username required"
    // };

    if (!data.email){
        errors.email = "Email requreid"
        // اگه تست کردیم و درست بود که هیچ تبدیل به فالسش میکنه و اجراش نمیکنه
        // ولی اگه فالس بود، یعنی ایمیل طبق این فرمتی که گفتیم نبود (!چیزی غیر از این بود) و ایمیل الکی داده
    } else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email address is invalid"
        // اگه همه چی اوکی بود
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password is required"
    } else if (data.password.length < 6){
        errors.password = "Password need to be 6 characcter or more"
    } else {
        delete errors.password
    }


    // در اینجا باید یه شرطی هم بذاریم که چه فرمی داره ولیدیشن میشه
    // اگه فرم لاگین بود فقط ایمیل و پسورد
    if (type === "signup") {

        // trim()
        // تریم میاد نیم رو میگیره فضاهای خالی بین رشته‌هارو حذف میکنه
        // این شرط رو برای وقتی میخوایم که کاربر "چیزی وارد نکرده نباشه" پس با ! برعکسش میکنیم
        // فالس: یعنی وقتی که خالیه

        // اگه هیچی داخل "استیتِ-نیم" نبود بیا داخل "آبجکت ارورز" یه -->کی-ولیو (نیم)<-- درست کن
    if (!data.name.trim()) {
        errors.name = "Username required"
        // اگه خالی نبود اون "آبجکت ارور" رو حذف کن
    } else {
        delete errors.name
    }

    if (!data.confirmPassword){
        errors.confirmPassword = "Confirm the password"
        // اگه کانفیرم-پسورد با پسورد قبلی برابر نبود
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password do not match"
    } else {
        delete errors.confirmPassword
    }

    if (data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accept our regulations"
    }
}

    return errors;
}