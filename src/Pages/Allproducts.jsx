import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCards from '../components/ProductCards';

const Allproducts = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div>
            <h3 className='font-bold text-2xl text-center mt-4'>All Available Products </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-8 lg:px-12'>
            {
                products.map(product=><ProductCards singleproduct={product}></ProductCards>)
            }
            </div>
        </div>
    );
};

export default Allproducts;