
"use client"
import React from 'react';
import Lottie from "lottie-react";
import animationlottie2 from '@/assets/animation.json'
import SectionTitle from '@/Shared/SectionTitle/SectionTitle';

const CommonQuestion = () => {
    return (
        <>

            {/* <SectionTitle heading={"Common Question"}></SectionTitle> */}
            <div className='mt-10 text-center mx-auto w-1/3'>
        <div>
        <hr/>
        <h1 className='text-center font-semibold text-2xl md:text-3xl py-3'>Common Question</h1>
        <hr />
        </div>
    </div>
            <div className='lg:grid mb-28 mt-10 lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse '>
                <div>

                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded">
                        <div className="collapse-title text-xl font-semibold">
                            How do I get started with volunteering?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>Getting started is easy! You can begin by researching local organizations, nonprofits, or community centers that align with your interests. Reach out to them directly or visit their websites to inquire about volunteer opportunities. Many organizations have online registration forms or volunteer coordinators who can guide you through the process.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded">
                        <div className="collapse-title text-xl font-semibold">
                            What types of volunteer work can I do?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>There are numerous ways to contribute as a volunteer. You can participate in events and fundraisers, assist with administrative tasks, provide mentorship or tutoring, engage in environmental conservation efforts, support food drives or shelters, offer your skills in areas like web design or marketing, and much more. The possibilities are vast, and you can choose based on your passions and skills.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded">
                        <div className="collapse-title text-xl font-semibold">
                            How much time commitment is required for volunteering?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>The time commitment varies depending on the organization and the specific project. Some volunteer opportunities require a one-time commitment for an event or project, while others may involve a regular commitment of a few hours per week or month. Discuss your availability and preferences with the organization to find a suitable opportunity that fits your schedule.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded">
                        <div className="collapse-title text-xl font-semibold">
                            What are the benefits of volunteering?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>Volunteering offers numerous personal and social benefits. It allows you to give back to your community, make a positive impact, and contribute to causes you care about. Volunteering can also provide opportunities for personal growth, skill development, and building meaningful connections with like-minded individuals. Additionally, it can enhance your resume, expand your network, and provide a sense of fulfillment and purpose.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded">
                        <div className="collapse-title text-xl font-semibold">
                            Can volunteering lead to employment opportunities?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>Yes, volunteering can often lead to employment opportunities. It provides a chance to showcase your skills, work ethic, and dedication, which can be valuable when seeking job positions within the nonprofit sector or other fields. Additionally, volunteering allows you to expand your professional network and make connections that may lead to employment referrals or recommendations.</p>
                        </div>
                    </div>



                </div>

                <div className='w-1/2 mb-10 md:mb-0 mx-auto'>
                    <Lottie animationData={animationlottie2} loop={true} />
                </div>
            </div>
        </>

    );
};

export default CommonQuestion;