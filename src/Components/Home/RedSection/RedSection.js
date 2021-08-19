import { useState, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import styles from './RedSection.module.css';
import WhiteBtn from '../../UI/WhiteBtn';
import ProductCarousel from './ProductCarousel';

const RedSection = () => {
    const [playMusic, setPlayMusic] = useState(false);
    const audioRef = useRef();

    const musicHandler = () => {
        playMusic ? audioRef.current.pause() : audioRef.current.play();
        setPlayMusic(prevState => !prevState);
    }

    const products = [
        { title: 'Superior sound', text: 'Experience live versions of your favourite songs.' },
        { title: 'Front Row Seats', text: 'Experience concerts up close and personal.' },
        { title: 'Subscription Payment Model', text: 'No commitment, cancel anytime.' },
        { title: 'No Fee Cancelation Policy', text: 'Never worry about forgetting a payment again!' },
    ];

    return (
        <section className={styles.red}>
            <div className={styles.music}>
                <audio ref={audioRef} src={'/audios/song.mp3'}></audio>
                <IconButton color="default" component="span" className={styles.btn} onClick={musicHandler}>
                    {playMusic ? <VolumeOffIcon className={styles.speaker} /> : <VolumeUpIcon className={styles.speaker} />}
                </IconButton>
            </div>
            
           <ProductCarousel products={products}/>
            <div className={styles.buttons}>
                <WhiteBtn text={"Try it now"} href={'/pricing'} top={40}/>
                <WhiteBtn text={"See demo"} />
            </div>
        </section>
    );
};

export default RedSection;