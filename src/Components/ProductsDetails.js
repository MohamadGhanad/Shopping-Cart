import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

//context
import { productsContext } from '../Context/ProductContextProvider';

//styles
import styles from './Shared/ProductDetails.module.css';

const ProductsDetails = (props) => {


    const params = useParams()
    const id = params.id
    const data = useContext(productsContext);
    const product = data[id - 1];
    const {image, title, description, price, category } = product;

    return (
    <div className={styles.container}>
        <img className={styles.image} src={image} alt="product" />
        <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}><span>Category:</span> {category}</p>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to="/products">Back to Shop</Link>
            </div>
        </div>
    </div>
    );
};

export default ProductsDetails;