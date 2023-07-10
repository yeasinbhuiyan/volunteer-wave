/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img1 from '@/assets/images/difference.jpg'
import Image from 'next/image';

const Difference = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:p-20 p-10 md:space-x-16'>
            <div className='mx-auto'>
                <Image width='100%' height='100%' src={img1}></Image>
            </div>
            <div className='w-full mx-auto  my-10 p-3 md:p-0 md:my-0'>
                <h1 className='font-bold text-3xl'>How We&apos;re Making <br /> a difference</h1>
                <ul className='space-y-5 md:p-8'>
                    <li className='text-sm font-semibold'>Highlight the partnerships and collaborations your organization has established with local communities, nonprofits, and other stakeholders. Emphasize how these partnerships enable you to maximize the effectiveness of your volunteer efforts and create a more significant impact together.</li>
                    <li className='text-sm font-semibold'>Showcase a variety of projects and initiatives your organization has undertaken to address critical social, environmental, or humanitarian issues. Discuss the specific goals, objectives, and outcomes of these projects, demonstrating the tangible difference they have made in the communities you serve.</li>
                    <li className='text-sm font-semibold'>Explain how Volunteer Wave goes beyond individual projects to empower communities for long-term sustainability. Discuss any capacity-building initiatives, skills training programs, or local empowerment projects that your organization supports, highlighting how these efforts create a ripple effect of positive change.</li>
                    <li className='text-sm font-semibold'>Share how Volunteer Wave measures and evaluates the impact of its projects and initiatives. Discuss the metrics you use to track progress and showcase the positive outcomes achieved. This could include the number of individuals or families assisted, the environmental impact, or any other relevant metrics that demonstrate your organization&apos;s success.</li>
                </ul>
            </div>

        </div>
    );
};

export default Difference;