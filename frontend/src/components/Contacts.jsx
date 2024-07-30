import styles from './Contacts.module.css';
const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsItem}>
                <a href="https://www.linkedin.com/in/yevhenii-levchenko-6409aa1b8/" target="_blank" rel="noreferrer">
                    Linkedin
                </a>
            </div>

            <div className={styles.contactsItem}>
                <a href="mailto:dehferion@gmail.com">dehferion@gmail.com</a>
            </div>
        </div>
    );
};

export default Contacts;
