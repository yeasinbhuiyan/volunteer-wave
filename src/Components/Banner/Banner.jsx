"use client"
import React from 'react';
import Lottie from "lottie-react";
import animationlottie2 from '@/assets/animation2.json'


const Banner = () => {
    return (
        <div className='w-full h-[600px] px-10 md:flex md:items-center'>
            <div className='md:w-1/2 w-full py-20 space-y-7'>
                <h1 className='text-6xl font-bold'>Join <span className='text-green-700'>Volunteer Wave</span> <br /> and Create a <br /> Positive Impact!</h1>

                <p className=''>Welcome to our volunteer website, a platform dedicated to connecting passionate individuals with meaningful opportunities to give back to their communities. Whether you&apos;re looking to support a cause you&apos;re deeply passionate about, gain valuable experience, or simply spread kindness, we provide a range of volunteer projects and initiatives to suit your interests and availability</p>
                <button className='btn btn-primary'>Join Us</button>
            </div>
            <div className='md:w-1/2 w-full'>
            <Lottie animationData={animationlottie2} loop={true} />

            </div>

        </div>
    );
};

export default Banner;