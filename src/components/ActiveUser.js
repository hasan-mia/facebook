import React from 'react';
import userImag from '../../src/assets/userImg.png';

const ActiveUser = () => {
    return (
        <a className='hover:bg-gray-100 relative'>
            <img src={userImag} className="w-8 rounded-full"/>
            <span className='w-3 h-3 bg-green-500 border-2 rounded-full absolute left-10 top-1/2'></span>
            <span>Ontora Islam</span>
        </a>
    );
};

export default ActiveUser;