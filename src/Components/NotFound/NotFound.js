import WhiteBtn from '../UI/WhiteBtn';

import styles from './NotFound.module.css';

const NotFound = () => (
    <section className={styles.error}>
        <h1>Sorry! Something wrong happened.</h1>
        <WhiteBtn text={"Back to Home"} href={'/'} top={1} />
    </section>
);

export default NotFound;