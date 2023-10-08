import React from 'react';
import styles from "./Logos.module.css";
import TehranLg1 from "./images/TehLg.png";
import TehranLg2 from "./images/TehLg2.png";
import TehranLg3 from "./images/TehLg3.png";
const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Do you know this place?</h3>
            <div>
                <img src={TehranLg1} alt='logo'/>
                <img src={TehranLg2} alt='logo'/>
                <img src={TehranLg3} alt='logo'/>
            </div>
        </div>
    );
};

export default Logos;