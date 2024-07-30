import React from 'react';
import styles from './Footer.module.css';
import Tag from './misc-componets/Tag';

function Footer() {
    return (
        <div className={styles.footer}>
            <Tag>{'Даний сайт був створений за допомогою бібліотеки React    хвилину тому'}</Tag>
        </div>
    );
}

export default Footer;
