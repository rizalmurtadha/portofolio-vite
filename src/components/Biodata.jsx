import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

import foto from '../img/JAS.jpg'

const Biodata = () => {
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/rizalmurtadha/", '_blank');
    };
    const iconStyle = {
        color: "white" || 'inherit', // Use the provided iconColor or default to 'inherit'
      };
  return (
    <div>
        <div className='w-full h-screen z-10'>
            <div className='max-w-[900px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-white'>Muhammad Rizal Murtadha</h1>
                
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>I'm a
                <TypeAnimation
                    sequence={[
                        'Developer', // Types 'One'
                        1000, // Waits 1s
                        'Coder', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Tech Enthusiast', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                </h2>
                {/* <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div> */}
                <div className="biodata-card">
                    <p className='indented-text'>
                    <img className='' width={200} src={foto} alt='' />
                    As a graduate of Informatics at Telkom University, with a background in Robotics Laboratory, I possess exceptional logical thinking and problem-solving skills. My internship experience as a Research Assistant further enhances these abilities through hands-on experience in designing and implementing front-end and back-end systems. With a strong passion for the digital world and technology, I am eager to continue expanding my knowledge and understanding.
                    </p>
                </div>
                <div className='flex justify-between max-w-[200px] w-full'>
                    <div className="linkedin-link" onClick={handleLinkedInClick}>
                        <FaLinkedinIn className='cursor-pointer' style={iconStyle} size={20}/>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Biodata