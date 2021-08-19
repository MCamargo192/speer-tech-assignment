import styles from './YellowSection.module.css';
import WhiteBtn from '../../UI/WhiteBtn';
import Reviews from './Reviews';

const YellowSection = () => {
    return (
        <section className={styles.yellow}>
            <Reviews />
            <div className={styles.buttons}>
                <WhiteBtn text={"Try it now"} href={'/pricing'} top={20}/>
            </div>
        </section>
    );
};

export default YellowSection;