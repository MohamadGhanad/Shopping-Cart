import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../../Context/CartContextProvider';

//icons
import shopIcon from '../../assets/icons/cart3.svg'

//styles
import styles from './Navbar.module.css'


const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to='/products'>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to='/cart'><img src={shopIcon} alt='shop' /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;