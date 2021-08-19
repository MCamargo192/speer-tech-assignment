import styles from './ProductCarousel.module.css';

const ProductCarousel = props => {

    // <div class="carousel" style="transform: translateX(-0.1px);">
    //         <div class="carousel__planes" style="width: calc(360px + 252vw);">
    //             <div class="carousel__plane">
    //                 <a href="/expertise/digital-strategy" class="carousel__text" data-hover="None" style="transform: translateX(-0.0125px);">
    //                     <span class="carousel__num font_caps">/ 01</span>
    //                     <h4>Digital Strategy</h4>
    //                     <p>Consumer Insights &amp; Trends, Go-To-Market Planning, Data Science &amp; Analytics, Product Strategy &amp; Roadmapping.</p>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    return (
        <div className={styles['products-container']} >
            <div className={styles.carousel}>
                <div className={styles['products']}>
                    {props.products.map((product, idx) => (
                        <div key={idx} className={styles.product}>
                            <h3>{product.title}</h3>
                            <h5>{product.text}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default ProductCarousel;