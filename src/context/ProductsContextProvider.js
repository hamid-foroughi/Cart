
import axios from 'axios';
import React, { useEffect, useState , createContext} from 'react';

//Api
import { getProducts } from '../services/api';

//Context
export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [products , setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }
        fetchAPI()
    },[])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;