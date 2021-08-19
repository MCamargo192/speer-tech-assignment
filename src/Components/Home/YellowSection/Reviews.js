import Avatar from '@material-ui/core/Avatar';
import styles from './Reviews.module.css';

const Reviews = props => {
    const reviews = [
        { photo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Britney_Spears_2013.jpg", person: 'Britney Spears', job: 'artist', text: '"Love it, it’s the Best. I can’t live without it!"' },
        { photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Scooter_Braun_headshot.jpg/640px-Scooter_Braun_headshot.jpg", person: 'Scooter Braun', job: 'Talent Manager', text: '"An amazing user experience. I love it"' },
        { photo: "https://upload.wikimedia.org/wikipedia/commons/2/25/DJ_Khaled_2012_%28cropped%29.jpg", person: 'DJ Khalid', job: 'Producer', text: '"This is sick! I\'m Obsessed"' }
    ];

    return (
        <div className={styles.reviews}>
            {reviews.map((review, idx) => (
                <div className={`${styles.review} ${(idx % 2 === 0 ? styles.left : styles.right)}`}>
                    <Avatar src={review.photo} alt={review.person} className={styles.large} />
                    <div className={styles.text}>
                        <h3
                            onMouseEnter={(e) => { e.target.style.color = 'hsl(0, 0%, 100%)' }}
                            onMouseLeave={(e) => { e.target.style.color = 'hsl(0, 0%, 0%)' }}
                        >{review.text}</h3>
                        <h5
                            onMouseEnter={(e) => { e.target.style.color = 'hsl(0, 0%, 100%)' }}
                            onMouseLeave={(e) => { e.target.style.color = 'hsl(0, 0%, 0%)' }}
                        >{review.person}, {review.job}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};
// https://discourse.processing.org/t/using-mask-to-reveal-background-image/25528
export default Reviews;