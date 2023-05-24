import React, {useState, useEffect, createContext} from 'react';

//Api
import getProducts from '../Services/Api';

export const productsContext = createContext()

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setProducts(await getProducts())
        }

        fetchAPI();
    }, [])

    return (
        <div>
            <productsContext.Provider value={products}>
                {children}
            </productsContext.Provider>
        </div>
    );
};

export default ProductContextProvider;