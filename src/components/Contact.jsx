import React from 'react'
import { useRef,useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'


import ContactCard from './ContactCard';

const Contact = () => {
    const contactRef = useRef();
    return (
        <div id='contact2'  ref={contactRef}>
            <div className='w-full h-screen  '>
                <div className=' m-0  flex flex-col  lg:items-center items-center '>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 pt-20'>Contact</h1>
                    <ContactCard
                        name="Muhammad Rizal Murtadha"
                        email="m.rizalmurtadha@gmail.com"
                        location="Kab. Tangerang, Indonesia"
                        phone="+62 821-1680-1213"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact