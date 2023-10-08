import React, { Component } from 'react';
import styles from "./Card.module.css";
import down from "./images/down.svg"
import up from "./images/up.svg"
import { Link } from "react-router-dom"

class Card extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

    downHandler = () => {
        // میخوام وقتی به صفر رسید، عدد منفی نمایش نده

        // در اینجا میگیم اگه کانتر بزرگتر یا مساوی 1 بود بیا یدونه ازش کم کن
        // اگه کانتر صفر0 باشه دیگه بزرگتر یا مساوی 1 نیست، پس شرط اجرا نمیشه

        if (this.state.counter >= 1){
            this.setState(prevState => ({
                counter: prevState.counter - 1,
            }))
        }

            // در اینجا چون به خودِ کانتر نیاز داریم از پریو استیت استفاده میکنیم
            // و برای پریو استیت اَرو فانکشن میدیم
            // و چون یه ورودی داره نیازی به پرانتز نیست
    }

    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    render() {
        const {image, name, cost, id} = this.props;
        const {counter} = this.state;
        return (
           <div className={styles.container}>
               <img src={image} alt='tehran'/>
               <h3>{<Link to={`/products/${id}`}>{name}</Link>}</h3>

{/*
                در اینجا میایم 'براساس فاصله اسپلیت' میکنیم و چون 'آرایه' برمیگردونه ایندکس 0 رو میگیریم 

                میگیم: اگه کانتر درست بود، چه زمانی درسته؟؟ 
                زمانی 'کانتر' درسته زمانی که 1،2،3 باشه، بیا اینو نشون بده 
                و اگه فالس بود، چه زمانی فالسِ؟ زمانی که صفر باشه، اگه صفر بود هیچی نشون نده
                 
                اون نامبر بزرگ میگیم: نامبر کن اون رشته رو 
*/}{/*
                اگه درست بود زمانی درسته که که عدد باشه، بیا عبارت داخل 'تمپلیت لیترالز' رو نشون بده 
                کاست چون داخل یه رشته است که دایر ساین هم داره
                باید براساس فاصله اسپلیت کنیم و ایندکس صفر رو بگیریم
                و چون رشته است باید تبدیل به نامبر بشه
*/}
               <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : "" }</p>
{/*           {500$}  |{counter true|* ${counter} = ({counter} * {500})
                    
                اینجا میگیم اگه کانتر ترو بود 1,2,3) بود بیا کاست رو درش ضربش کن
*/}
               <div className={styles.counter}>
{/* 
                میخوایم وقتی عدد کانتر صفر بود اون فلش به سمت پایین کم رنگ بشه
                پس میگیم
                هر موقع صفر بود بیا کلاس مورد نظر رو به ما بده در غیر اینصورت یه رشته خالی

                صفر0 خودش فالسِ، پس شرط بعد از : اجرا میشه
                کانتر 'عددی غیر از صفر باشه یعنی 1و2و3' شرط ترو میشه
                پس باید عملیات بعد از علامت سوال اجرا بشه
                اگه صفر شد بیا استایل.دی اکتیو رو اجرا کن

                ما میخوایم وقتی کانتر صفر شد (یعنی فالس شد) استایل مورد نظر اعمال بشه

                counter = 0(false) => style.deactive
                1-99... = " "
                    
*/}
                <img className={counter ? "" : styles.deactive} src={down} alt="arrow" onClick={this.downHandler}/>

{/*
                کد بالا رو به روش (&& و !) هم میتونیم استفاده کنیم - علامت تعجب میومد شرط رو برعکس میکرد
                <img className={!counter && styles.deactive} src={down} alt="arrow" onClick={this.downHandler}/>

                true  (1, 2, 3) ==> false (styles.deactive)
                false (0) ===> true ""
*/}
                <span>{counter}</span>
                <img src={up} alt="arrow" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;