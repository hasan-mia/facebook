import React from 'react';
import LeftContent from '../components/LeftContent';
import Posts from '../components/Posts';
import PostEditor from '../components/PostEditor';
import RightContent from '../components/RightContent';
import Story from '../components/Story';

const Home = () => {
    return (
       <div className='bg-gray-100'>
            <div className='flex flex-col lg:flex-row gap-2'>
                <div className='w-12/12 lg:w-3/12 sm-none'>
                    <LeftContent></LeftContent>
                </div>
                <div className='w-12/12 lg:w-6/12'>
                    <Story></Story>
                    <PostEditor></PostEditor>
                    <Posts></Posts>
                </div>
                <div className='w-12/12 lg:w-3/12'>
                    <RightContent></RightContent>
                </div>
            </div>
       </div>
    );
};

export default Home;