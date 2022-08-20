import React from 'react';
import {BsArrowRight} from 'react-icons/bs'
import user from '../../src/assets/user.png';
import user1 from '../../src/assets/user1.png';
import user2 from '../../src/assets/user2.png';
import user3 from '../../src/assets/user3.png';
import user4 from '../../src/assets/user4.png';
import user5 from '../../src/assets/user5.png';

const Story = () => {
    return (
        <div className='relative py-2 lg:py-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 px-2">
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl'/>
                    <img src={user} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full' />
                </div>
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl'/>
                    <img src={user} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full' />
                </div>
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl'/>
                    <img src={user} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full' />
                </div>
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl'/>
                    <img src={user} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full' />
                </div>
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl'/>
                    <img src={user} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full' />
                </div>
            </div>
            {/* ====Next Button=== */}
            <button type='button' className='absolute right-0 top-1/3 p-2 bg-gray-100 border border-gray-500 font-semibold rounded-full'><BsArrowRight/></button>
        </div>
    );
};

export default Story;