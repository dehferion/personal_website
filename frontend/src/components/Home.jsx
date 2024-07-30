import styles from './HomeSection.module.css';
import stylesDescription from './home-components/Description.module.css';
import Photo from './home-components/Photo';
import Description from './home-components/Description';

const Home = () => {
    return (
        <>
            <h1> Салют! </h1>
            <div className={styles.homeSection}>
                <Photo />
                <Description styles={stylesDescription} />
            </div>
        </>
    );
};

export default Home;
