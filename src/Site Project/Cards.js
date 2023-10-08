import React, { Component } from 'react';
import Card from './Card.js';
import styles from "./Cards.module.css";
import Iphone13 from "./images/Tehran 1.jpg";
import Iphone13Mini from "./images/Tehran 2.jpg";
import Iphone13Pro from "./images/Tehran 3.jpg";
import Iphone13ProMax from "./images/Tehran 4.jpg";



class Cards extends Component {
    constructor(){
        super();
        this.state = {
//              آرایه ای از آبجکت ها
            phoneData: [
                {id: 1, image: Iphone13, name: "Iphone 13", cost: "600 $"},
                {id: 2, image: Iphone13Mini, name: "Iphone 13 Mini", cost: "1100 $"},
                {id: 3, image: Iphone13Pro, name: "Iphone 13 Pro", cost: "900 $"},
                {id: 4, image: Iphone13ProMax, name: "Iphone 13 ProMax", cost: "800 $"}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>

{/* 
               <Card image={Iphone13} name="iPhone 13" cost="600 $"/>
               <Card image={Iphone13Mini} name="iPhone 13 Mini" cost="1100 $"/>
               <Card image={Iphone13Pro} name="iPhone 13 Pro" cost="900 $"/>
               <Card image={Iphone13ProMax} name="iPhone 13 ProMax" cost="800 $"/>
*/}
{/*
             در اینجا نمیایم کارد های بالا رو تک به تک بنویسیم
             میایم حلقه میزینم و به روش زیر مینویسیم
*/}
               {this.state.phoneData.map(phone =>
               <Card
               key={phone.id} 
               image={phone.image} 
               name={phone.name} 
               cost={phone.cost}
               id={phone.id}
               />
               )}
            </div>
        );
    }
}

export default Cards;