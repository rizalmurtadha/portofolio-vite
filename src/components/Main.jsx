import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BiLogoJava, BiLogoJavascript, BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import { BiLogoReact, BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";

import { TbBrandCSharp, TbBrandVite, TbBrandMysql } from "react-icons/tb"

import BA from '../img/BASidang.png'
import rekapNilai from '../img/RekapNilai.png'
import setoran from '../img/SetoranHafalan1.png'
// import siteBG from './../assets/site-bg.jpg'

const Main = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
  return (
    <div id='main'>

        <div className='w-full h-screen '>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 pt-20 text-center'>Experience</h1>
            <div className='slider-body'>
                <Slider {...settings}>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80'  src={BA} alt='' />
                        <p className='tempat'>HUMIC Research Center Telkom University (Internship)</p>
                        <p className='job'>Research Assistant</p>
                        <p className='framework'>#Python, #Flask</p>
                        <p className='detail'>
                            Created web‑application for managing news events of Informatics Faculty thesis defense.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80' src={rekapNilai} alt='' />
                        <p className='tempat'> SMP Binar Ilmu - Rekap Nilai Mapel  (Freelance)</p>
                        <p className='job'>Web-Application Developer</p>
                        <p className='framework'>#Python, #Flask</p>
                        <p className='detail'>
                            #
                        </p>
                    </div>
                </div>

                <div>
                    <div className="main-card">
                        <img className='object-contain h-80' src={setoran} alt='' />
                        <p className='tempat'> SMP Binar Ilmu - Setor Hafalan Al-Qur'an (Freelance)</p>
                        <p className='job'>Web-Application Developer</p>
                        <p className='framework'>#Python, #Flask</p>
                        <p className='detail'>
                            #
                        </p>
                    </div>
                </div>

                </Slider>
            </div>
        </div>
        
        <div className='w-full h-screen '>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 pt-20 text-center'>Project</h1>
            <div className='slider-body'>
                <Slider {...settings}>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80'  src={BA} alt='' />
                        <p className='tempat'>HUMIC Research Center Telkom University (Internship)</p>
                        <p className='job'>Research Assistant</p>
                        <p className='framework'>#Python, #Flask</p>
                        <p className='detail'>
                            Created web‑application for managing news events of Informatics Faculty thesis defense.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80' src={rekapNilai} alt='' />
                        <p className='tempat'> SMP Binar Ilmu - Rekap Nilai Mapel  (Freelance)</p>
                        <p className='job'>Web-Application Developer</p>
                        <p className='framework'>#Python, #Flask</p>
                        <p className='detail'>
                            #
                        </p>
                    </div>
                </div>

                <div>
                    <div className="main-card">
                        <img className='object-contain h-80' src={setoran} alt='' />
                        <p className='tempat'> SMP Binar Ilmu - Setor Hafalan Al-Qur'an (Freelance)</p>
                        <p className='job'>Web-Application Developer</p>
                        <p className='framework'>#Python, #Flask</p>
                        <p className='detail'>
                            #
                        </p>
                    </div>
                </div>

                </Slider>
            </div>
        </div>

        <div className='w-full h-screen  '>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 pt-20 text-center pb-10'>Skill</h1>
            <div className='max-w-[900px] m-auto justify-center h-full pt-20'>
                <div className='flex justify-between pt-6  w-full'>
                    <BiLogoPython  size={70}/>
                    <BiLogoJava  size={70}/>
                    <BiLogoJavascript  size={70}/>
                    <BiLogoCPlusPlus  size={70}/>
                    <BiLogoHtml5  size={70}/>
                    <BiLogoCss3  size={70}/>
                </div>
                <div className='flex justify-between pt-6  w-full'>
                    <BiLogoReact  size={70}/>
                    <BiLogoFlask  size={70}/>
                    <BiLogoPostgresql  size={70}/>
                    <TbBrandCSharp  size={70}/>
                    <TbBrandVite  size={70}/>
                    <TbBrandMysql  size={70}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main