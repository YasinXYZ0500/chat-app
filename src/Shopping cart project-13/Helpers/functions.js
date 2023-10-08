// با این فانکشن میخوایم فقط 2 کلمه از محصول رو نمایش بدیم
// اسپلیت تایتل براساس فاصله
const shorten = (title) => {
    const splitedTilte = title.split(" ");
    const newTilte = `${splitedTilte[0]} ${splitedTilte[1]}`
    return newTilte;
}

// میخوایم چک کنیم ببینیم ایدی محصول که توی پروداکتس هست، توی (استیت) سبد خرید وجود داره یانه
// اگه بود: ترو - اگه نبود: فالس

// State = سبد خرید

const isInCart = (state, id) => {
    // ما فقط یه "ترو یا فالس" خالی میخوایم برای اینکار از 2 تا علامت !! استفاده میکنیم
    // اگه هیچی پیدا نکرد: فالس - اگه چیزی پیدا کرد یه آبجکت میده
    // آقای استیت برو داخل سلکتد آیتم و فایند کن
    // آیدی محصول رو با آیدی محصولی که اینجا وارد کردیم مقایسه کن
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}

// شمارش تعداد محصولات
const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1 ){
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

export {shorten, isInCart, quantityCount}