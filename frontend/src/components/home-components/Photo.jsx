import React from 'react';
import styles from './Photo.module.css';
function Home() {
    return (
        <div className={styles.photo}>
            <img src={require('./photo.jpg')} alt="Not avaliable" />
        </div>
    );
}

export default Home;
