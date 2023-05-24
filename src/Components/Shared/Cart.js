import React from 'react';
import { useContext } from 'react';

//context 
import { CartContext } from '../../Context/CartContextProvider';

//icons
import trashIcon from "../../assets/icons/trash3.svg"

//styles
import styles from "./Cart.module.css";

const Cart = (props) => {

    const {image, title, price, quantity} = props.data ;
    const {dispatch} = useContext(CartContext);

    return (
        <div className={styles.container} >
        <img className={styles.productImage} src={image} alt='pic' />
        <div className={styles.data}>
                <h3>{title.split(" ").slice(0, 2).join(' ')}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} >-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
    );
};

export default Cart;