import WhiteBtn from '../UI/WhiteBtn';
import styles from './Pricing.module.css';

const Pricing = () => {
    const plans = [
        { title: 'Basic Plan for $9 a month', info: ['Great sound quality', 'Good music library ', 'Excellent song choices', 'Basic amount of visuals'] },
        { title: 'Advanced Plan for $99 per year', info: ['Amazing sound quality', 'Great music library ', 'Even better song choices', 'Amazing visuals'] },
        { title: 'Pro Plan for $150 per year', info: ['Incredible sound quality', 'Unbelievable music library ', 'Crazy good song choices', 'Amazing visuals'] }
    ];
    return (
        <section className={styles.pricing}>
            <h1 className={styles.title}>Check our plans and prices</h1>
            <div className={styles.plans}>
                {plans.map(plan => (
                    <div>
                        <h3>{plan.title}</h3>
                        {plan.info.map(info => <p>- {info}</p>)}
                        <WhiteBtn text={"Select"} href={'/payments'} top={1} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;