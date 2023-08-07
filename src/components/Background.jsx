import React from 'react'
import { useRef,useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import './../style/background.css'

import Main from './Main'
import Biodata from './Biodata'
import Contact from './Contact'



const Background = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [contactPos, setContactPos] = useState(0);
    const [mainPos, setMainPos] = useState(0);

    const contactRef = useRef();
    const mainRef = useRef();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
    }, []);

    const getOffset = () => {
        const x = contactRef.current.offsetTop;
        const x2 = mainRef.current.offsetTop;
        setContactPos(x);
        setMainPos(x2);
    }

    useEffect(() => {
        window.addEventListener("click", getOffset);
        
    }, []);


    

  return (
    <div>
        <div className='fixed top-0 left-0'><h1>{scrollPosition}</h1></div>
        <div className='fixed top-0 left-20'><h1>{contactPos}</h1></div>
        <div className='fixed top-0 left-40'><h1>{mainPos}</h1></div>

        <div id='Biodata'>
            <Biodata />
        </div>

        <img className='w-full h-screen object-cover object-center absolute top-0 -z-10' src='https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
        {/* <img className='w-full  object-cover object-center h-[4000px]' src={siteBG} alt='' /> */}
        {/* <div className='w-full absolute top-0 left-0  bg-white/20'></div> */}


        <div id='Main' ref={mainRef}>
            <Main />
        </div>



        <img className='w-full h-screen object-cover object-center mainBgDefaultPos ' src='https://images.unsplash.com/photo-1674784764904-2200fd51e1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80' alt='' />
        {/* <img className='w-full  object-cover object-center h-[4000px]' src={siteBG} alt='' /> */}
        <div className='w-full absolute top-0 left-0  bg-white/20'></div>

        <div ref={contactRef}>
            <Contact />
        </div>

        <img className='w-full h-screen object-cover object-center ' src='https://images.unsplash.com/photo-1681826415794-847bf97ad644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' alt='' />
        {/* <img className='w-full  object-cover object-center h-[4000px]' src={siteBG} alt='' /> */}
        <div className='w-full absolute top-0 left-0  bg-white/20'></div>

        {/* <div id='contact' ref={contactRef}>
            <div className='w-full h-screen  '>
                <div className='max-w-[900px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Contact</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
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
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20}/>
                        <FaFacebookF className='cursor-pointer' size={20}/>
                        <FaInstagram className='cursor-pointer' size={20}/>
                        <FaLinkedinIn className='cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
        </div> */}
        
    </div>
  )
}

export default Background