import React from 'react';
import LeftContent from '../components/LeftContent';
import PostEditor from '../components/PostEditor';
import Story from '../components/Story';

const Home = () => {
    return (
       <main className='bg-gray-100'>
            <div className='flex flex-col lg:flex-row gap-2'>
                <div className='w-12/12 lg:w-3/12 sm-none'>
                    <LeftContent></LeftContent>
                </div>
                <div className='w-12/12 lg:w-6/12'>
                    <Story></Story>
                    <PostEditor></PostEditor>
                </div>
                <div className='w-12/12 lg:w-3/12'>
                    column 3
                </div>
            </div>
       </main>
    );
};

export default Home;