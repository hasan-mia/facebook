import React from 'react';
import LeftContent from '../components/LeftContent';

const Home = () => {
    return (
        <div className='flex'>
           <div className='w-12/12 lg:w-3/12 sm-none'>
                <LeftContent></LeftContent>
            </div>
            <div className='w-12/12 lg:w-6/12'>
                column 2
            </div>
            <div className='w-12/12 lg:w-3/12'>
                column 3
            </div>
        </div>
    );
};

export default Home;