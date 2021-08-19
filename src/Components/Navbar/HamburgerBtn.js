
import styles from './HamburgerBtn.module.css';

const HamburgerBtn = props => {
    const clickHandler = () => {
        props.onToggle();
    }
    return (
        <button className={`${styles.btn} ${props.showLinks && styles['is-active']}`} onClick={clickHandler}>
            <span className={styles['btn-line']}></span>
            <span className={styles['btn-line']}></span>
            <span className={styles['btn-line']}></span>
        </button>
    );
};

export default HamburgerBtn;