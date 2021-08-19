import styles from './Products.module.css';

const Products = props => (
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

export default Products;