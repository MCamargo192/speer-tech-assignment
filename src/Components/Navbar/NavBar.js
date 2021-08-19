import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/EXPCON.svg';
import Links from "./Links";

import styles from './NavBar.module.css';

const NavBar = () => (
    <Fragment>
        <div className={styles.nav}>
            <a href="/"><Logo className={styles.logo}/></a>
            <Links />
        </div>
    </Fragment>
);

export default NavBar;