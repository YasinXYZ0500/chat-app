import React, { useState, useEffect } from 'react';

// API
import { getCoin } from '../Services/Api';

// Components
import Loader from './Loader';
import Coin from './Coin';

// Style
import styles from "./Landing.module.css"

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data)
        }
        fetchAPI()
    }, [])

    // این فانکشن میاد وقتی چیزی رو تایپ میکنیم توسط [ست-سرچ] اونو داخل [استیت سرچ] میریزه
    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <>
            <input className={styles.input} type='text' placeholder='Search' value={search} onChange={searchHandler}/>
{/*
            در اینجا میخوایم بگیم اگه "کوینز.لنگس" ترو بود یعنی چیزی داخلش بود بیا اینو نشون بده
            اگه فالس بود، یعنی چیزی داخلش نبود لودر رو نشون بده
*/}
        {
            coins.length ? <div className={styles.coinContainer}> {searchedCoins.map(coin => <Coin 
                key={coin.id} 
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.market_cap_change_percentage_24h}
            />)}
            </div> : <Loader/>

        }
        </>
    );
};

export default Landing;