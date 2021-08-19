import GradientBtn from '../../UI/GradientBtn';
import styles from './Contacts.module.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RoomIcon from '@material-ui/icons/Room';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Contacts = () => {
    const contacts = [
        { contact: "letschat@epicon.ca", icon: <AlternateEmailIcon /> },
        { contact: "(416) 738-2475", icon: <PhoneIphoneIcon /> },
        { contact: "123 Toronto Street E. Toronto ON, Canada. L5D 8G5", icon: <RoomIcon /> }
    ];

    return (
        <section className={styles.contacts}>
            <div className={styles.info}>
                <h2>Contact us</h2>
                <div className={styles.contact}>
                    {contacts.map(item => (
                        <p>{item.icon} {item.contact}</p>
                    ))}
                </div>
            </div>
            <GradientBtn text={"Try it now"} href={"/pricing"} top={-20} />
        </section>
    );
}

export default Contacts;