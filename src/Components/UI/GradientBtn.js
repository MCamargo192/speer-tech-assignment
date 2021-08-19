import styles from './GradientBtn.module.css';

const GradientBtn = props => (
        <div className={styles["button-container"]} style={{'--top' : `${props.top}%`}}>
            <a href={props.href || '/'} className={styles["btn"]}><span>{props.text}</span></a>
        </div>
);

export default GradientBtn;