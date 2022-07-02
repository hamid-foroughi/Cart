import axios from 'axios';
import React  , { useContext , useEffect, useState } from 'react';
import { Link , useParams } from 'react-router-dom';

//Context
import { ProductsContext } from '../context/ProductsContextProvider';

//Styles
import styles from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const [state,setState] = useState([])
    const params = useParams()
    const id = params.id;


    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setState(response.data))
    },[])

    const {image , title , description , price , category} = state

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product'/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category : </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}$</span>
                    <Link to='/products'>Back To Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;