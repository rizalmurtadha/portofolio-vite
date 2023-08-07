import React from 'react'
import { useEffect, useState } from 'react';

import Main from './Main'
import Biodata from './Biodata'
import Contact from './Contact'


import BGHome1 from '../img/Home1.jpg'
import BGHome2 from '../img/Home2.jpg'
import BGHome3 from '../img/Home3.jpg'


const Home = () => {

    const [sidebarTop, setSidebarTop] = useState(undefined);

    useEffect(() => {
        const mainBG = document.querySelector('.mainBG').getBoundingClientRect();
        setSidebarTop(mainBG.top);
    }, []);

    useEffect(() => {
        if (!sidebarTop) return;
    
        window.addEventListener('scroll', isSticky);
        // return () => {
        //   window.removeEventListener('scroll', isSticky);
        // };
    }, [sidebarTop]);

    const screenHeight = window.innerHeight;

    const isSticky = (e) => {
        const mainBG = document.querySelector('.mainBG');
        const scrollTop = window.scrollY;
        if (scrollTop < screenHeight) {
            mainBG.classList.remove('is-sticky');
            mainBG.classList.remove('mainBgMaxPos');
            mainBG.classList.add('mainBgDefaultPos');
        }
        else if (scrollTop >= screenHeight && scrollTop <= (screenHeight*3)) {
            mainBG.classList.remove('mainBgDefaultPos');
            mainBG.classList.add('is-sticky');
        } else {
            mainBG.classList.remove('is-sticky');
            mainBG.classList.add('mainBgMaxPos');
        }
    };


    return (
        <div className='homePage'>
            <div id='Biodata'>
                <Biodata />
            </div>

            {/* absolute top-0 -z-10 */}
            {/* <img className='w-full h-screen object-cover object-center biodataBgDefaultPos -z-10' src='https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' /> */}
            <img className='biodataBG h-screen biodataBgDefaultPos -z-10' src={BGHome1} alt='' />

            <div id='Main' >
                <Main />
            </div>

            {/* mainBgDefaultPos */}
            {/* <img className='w-full h-screen object-cover object-center mainBgDefaultPos -z-10' src='https://images.unsplash.com/photo-1674784764904-2200fd51e1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80' alt='' /> */}
            <img className='mainBG h-screen mainBgDefaultPos -z-10' src={BGHome2} alt='' />

            <div >
                <Contact />
            </div>

            {/* <img className='w-full h-screen object-cover object-center contactBgDefaultPos -z-10' src='https://images.unsplash.com/photo-1681826415794-847bf97ad644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' alt='' /> */}
            <img className='contactBG h-screen contactBgDefaultPos -z-10' src={BGHome3} alt='' />

        </div>
    )
    
}

export default Home