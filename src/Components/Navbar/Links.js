import { useState } from 'react';
import HamburgerBtn from './HamburgerBtn';
import styles from './Links.module.css';

const Links = props => {
    const [showMenu, setShowMenu] = useState(false);
    const menuHandler = () => {
        setShowMenu(prevState => !prevState);
    }
    const li = [
        {
            link: "/",
            text: "home"
        },
        {
            link: "/pricing",
            text: "pricing"
        }
    ];


    return (
        <div>
            <HamburgerBtn onToggle={menuHandler} showLinks={showMenu} />
            <div className={styles['links-menu']}>
                {showMenu && <ul className={styles['links-list']}>
                    {li.map((link, idx) => (
                        <li key={idx}><a href={link.link} className={styles.link}>{link.text}</a></li>
                    ))}
                </ul>}
            </div>
        </div>
    )
};

export default Links;