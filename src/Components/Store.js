import React, {useContext} from 'react';

//components/shared
import Product from './Shared/Product';

//context
import { productsContext } from '../Context/ProductContextProvider';

//styles
import styles from "./Shared/Store.module.css";


const Store = () => {

    const products = useContext(productsContext)

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product 
                    key={product.id} 
                    productData={product} />)
            }
        </div>
    );
};

export default Store;