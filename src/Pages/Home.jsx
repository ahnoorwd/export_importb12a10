import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Latestproductcards from '../components/Latestproductcards';
import Globalexim from './Globalexim';
import RewardsSection from './RewardsSection ';

const Home = () => {
    const latestproducts = useLoaderData();
    console.log(latestproducts);
    return (
        <div>
            <Banner></Banner>

            <div><h3 className='text-center font-bold text-2xl mb-4'>Our Latest Product</h3></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-8 lg:px-12'>
               {
                latestproducts.map(singlelatestproduct=><Latestproductcards singlelatestproduct={singlelatestproduct}></Latestproductcards>)
               }
            </div>
            <Globalexim></Globalexim>
            <RewardsSection></RewardsSection>
        </div>
    );
};

export default Home;