import React, { Component } from 'react';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import userImag from '../../src/assets/userImg.png';
import LeftArrow from "../../src/assets/left-arrow.svg"
import RightArrow from "../../src/assets/right-arrow.svg"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props}/>
  );

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props}/>
);

export default class Story extends Component{
    
    render() {  
      let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className='w-full py-2 lg:py-4 px-8 lg:px-1'>        
            <Slider {...settings}>
            <div className="px-1">
                <div className="arousel-item relative flex flex-col justify-items-center items-center h-full border-1 border-gray-300 shadow-md rounded-xl cursor-pointer">
                    {/* {
                      !userImag
                      <img src="https://placeimg.com/256/400/arch" className='w-full story-create rounded-xl' alt='user'/>
                      :
                      <img src={userImag} className='w-full story-create rounded-xl' alt='user'/>
                    } */}
                    <img src={userImag} className='w-full story-create rounded-xl' alt='user pic'/>
                    <span className='text-4xl text-gray-100'>
                        <BsFillPlusCircleFill className='border-4 border-blue-600 bg-gray-800 rounded-full'/> 
                    </span>
                    <p className='text-sm font-semibold text-gray-900'>Create Story</p>
                </div>
            </div>
            <div className="px-1">
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl' alt='user'/>
                    <img src={userImag} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full w-12 h-12' alt='content pic'/>
                </div>
            </div>
            <div className="px-1">
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl' alt='user'/>
                    <img src={userImag} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full w-12 h-12' alt='content pic'/>
                </div>
            </div>
            <div className="px-1">
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl' alt='user'/>
                    <img src={userImag} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full w-12 h-12' alt='content pic'/>
                </div>
            </div>
            <div className="px-1">
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl' alt='user'/>
                    <img src={userImag} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full w-12 h-12' alt='content pic'/>
                </div>
            </div>

            <div className="px-1">
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl' alt='user'/>
                    <img src={userImag} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full w-12 h-12' alt='content pic'/>
                </div>
            </div>

            <div className="px-1">
                <div className="carousel-item h-full rounded-md relative">
                    <img src="https://placeimg.com/256/400/arch" className='w-full rounded-xl' alt='user'/>
                    <img src={userImag} className='absolute left-2 top-2 border-4 border-blue-600 rounded-full w-12 h-12' alt='content pic'/>
                </div>
            </div>
        </Slider>
  
    </div>
      );
    }
}