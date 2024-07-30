import React from 'react';
import styles from './Tag.module.css';

function Tag({ children }) {
    return <div className={styles.tag}>{children}</div>;
}

export default Tag;
