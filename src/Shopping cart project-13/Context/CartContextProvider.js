
import React, {useReducer, useContext} from 'react';

const initialState = {
    // آرایه‌ای آبجکت هایی که کاربر انتخاب کرده
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    // تسویه حساب
    checkout: false
}

// ورودیش: آیتم های آرایه سلکتد آیتمز
const sumItems = items => {

    // پروداکت: هربار یکی از آیتم های [آرایه سلکتد آیتمز] است
    // توتال: جمع اعداد

    // مقدار آیتمزکانتر: روی هرکدوم از ورودی ها رِدیوس بزن
    const itemsCounter = items.reduce((total, Product) => total + Product.quantity, 0);
    //                                                 =>   0   +   1  =  1
    //                                                 =>   1   +   1  =  2
    //                                                 =>   2   +   1  =  3
    
    // مجموع قیمت ها
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    //                                          =>   0   +     1$        *     1 = 1$
    //                                          =>   1   +     2$        *     2 = 5$
    //                                          =>   5   +     3$        *     3 = 14$
    return {itemsCounter: itemsCounter, total: total}
    // return {itemsCounter, total}
}

// اکشن یه آبجکتِ{}، که هم "تایپ" رو به ما میده
// و هم توی "پی-لود" یه آبجکت به ما میده
// که مشخصات محصولیه که کاربر انتخاب کرده
const cartReducer = (state, action) => {
    console.log(state);
    switch(action.type){

        // 1- برای دفعه اول که کاربر محصولی اضافه میکنه
        case "ADD_ITEM":
            // آیدی آیتمی رو میخوایم که کاربر روش کلیک کرده و ببین توی "سلکتد-آیتمز" هست یا نه
            // اگه باشه ترو میده، اگه نباشه فالس میده
            // اینجا میخوایم اگه پیدا نکرد(نبود) فالس بده
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                // اینجا میخوایم فقط اطلاعات پی-لود داخلش باشه
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                // ممکنه وقتی کاربر چک اوت کرد دوباره بره یسری چیزا رو اضافه کنه به سبد خرید
                // در این حالت باید چک اوت رو فالس بذاریم
                checkout: false
            }

            // 2- حذف کردن محصول
            case "REMOVE_ITEM":
                // (بیا محصولاتی رو برگردون که آیدیشون با آیدی این محصول که اکشن "ریمو-آیتم" روش دیسپچ شده (کلیک شده
                // برابر نباشه - یعنی همه رو ریترن میکنه به جز اونی که دلیت شده
                const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
                return {
                    ...state,
                    selectedItems: [...newSelectedItems],
                    ...sumItems(newSelectedItems)

                }

            // 3- افزایش تعداد یه محصول
            case "INCREASE":
                // داخلش بگرد و چیزی رو ریترن بکن که ایندکس برابر با ایندکس محصولی باشه که کاربر روش کلیک کرده
                const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexI].quantity++;
                return {
                    ...state,
                    ...sumItems(state.selectedItems)

            }

            // 4- کاهش تعداد یه محصول
            case "DECREASE":
                const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexD].quantity--;
                return {
                    ...state,
                    ...sumItems(state.selectedItems)

            }
            
            case "CHECKOUT":
                return {
                    selectedItems: [],
                    itemCounter: 0,
                    total: 0,
                    checkout: true,
                }
            case "CLEAR":
                return {
                    selectedItems: [],
                    itemCounter: 0,
                    total: 0,
                    checkout: false,
                }
                
            default:
                return state;   
    }
}

export const CartContext = React.createContext()

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (

        
        // ولیو رو میخوایم استیت و دیسپچ رو بهش بدم به صورت یه آبجکت
        // حالا داخل جی اس ایکس که جاواسکریپت بنویسم، آبجکت جاوا اسکریپتِ باید آکلاد بنویسم
        // آکلاد اولی = جی اس ایکس
        // آکلاد دومی = جاوا اسکریپت (آبجکت)
        
        // چیلدرن رو مینویسم که بیاد این دیسپچ رو به همه چیلدرن ها بده
        // اکما اسکریپت 6 میگه وقتی اسم کی و ولیو یکیه، شما یکی رو بنویس خودم ابجکتش رو درست میکنم

        // <CartContext.Provider value={{state: state, dispatch: }}>
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;