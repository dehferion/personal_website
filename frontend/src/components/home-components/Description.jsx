import React from 'react';

function Description({ styles }) {
    return (
        <div className={styles.description}>
            <div className={styles.skills}>
                <p>Що я вмію*:</p>
                <ul>
                    <li>Linux</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>React </li>
                    <li>Java</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>Git</li>
                    <li>В дизайн, як бачите, не вмію</li>
                </ul>
            </div>
            <small>* Насправді, все це я знаю не професійно. Хоча і маю певний досвід на фрілансі</small>
        </div>
    );
}

export default Description;
