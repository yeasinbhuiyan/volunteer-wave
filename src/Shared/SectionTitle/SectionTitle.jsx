import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='mt-10 text-center mx-auto w-1/3'>
        <div>
        <hr/>
        <h1 className='text-center font-semibold text-3xl py-3'>{heading}</h1>
        <hr />
        </div>
    </div>
    );
};

export default SectionTitle;