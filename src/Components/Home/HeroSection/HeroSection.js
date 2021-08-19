import { Carousel } from 'react-bootstrap';

import styles from './HeroSection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GradientBtn from '../../UI/GradientBtn';

const HeroSection = () => {
    const sliderImages = [
        "https://images.unsplash.com/photo-1531651008558-ed1740375b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80"    
    ];
    return (
        <section>
            <Carousel fade nextLabel={''} prevLabel={''} className={styles.carousel}>
                {sliderImages.map((image, idx) => (
                    <Carousel.Item interval={10000}>
                        <img
                            className={`d-block w-100 ${styles.image}`}
                            src={image}
                            alt={image}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={styles['hero-text']}>
                <h2>INTERACTIVE CONCERT EXPERIENCES</h2>
                <h5>
                    Experience your favourite artists like never<br />
                    before and from the comfort of your own home.
                </h5>
                <GradientBtn text={"Try it now"} href={"/pricing"} top={5}/>
            </div>
        </section>
    )
};

export default HeroSection;