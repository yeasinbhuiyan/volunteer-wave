
"use client"
import { useEffect, useState } from 'react';
import AllVolunteersCard from './AllVolunteersCard';


import Marquee from "react-fast-marquee";


const AllVolunteers = () => {

    const [allVolunteers, setAllVolunteers] = useState([])

    useEffect(() => {
        fetch('/volunteer.json')
            .then(res => res.json())
            .then(data => setAllVolunteers(data))
    }, [])


    return (

        <>
            <div className='py-20'>

                <Marquee>
                    {
                        allVolunteers.map(volunteer => <AllVolunteersCard key={volunteer.title} volunteer={volunteer}></AllVolunteersCard>)
                    }
                </Marquee>
            </div>

        </>



    );
};

export default AllVolunteers;