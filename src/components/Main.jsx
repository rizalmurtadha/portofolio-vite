import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import { BiLogoJava, BiLogoJavascript, BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import { BiLogoReact, BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";

import { TbBrandCSharp, TbBrandVite, TbBrandMysql } from "react-icons/tb"

import BA from './../img/BASidang.png'
import rekapNilai from './../img/RekapNilai.png'
import setoran from './../img/SetoranHafalan1.png'
import landing from './../img/porto.png'
import crud from './../img/CRUD.png'
import semburat from './../img/POS.png'
import simulasi from './../img/Simulasi.png'

const Main = () => {

    const iconStyle = {
        color: "white" || 'inherit', // Use the provided iconColor or default to 'inherit'
      };

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
            <h1 className='sm:text-5xl text-4xl font-bold  pt-20 text-center text-white'>Experience</h1>
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
                            Develop an application for efficiently recording test scores across all subjects at Binar Ilmu School.
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
                            Create an application designed to meticulously track students' memorization progress of the Al‑Quran.
                        </p>
                    </div>
                </div>

                </Slider>
            </div>
        </div>
        
        <div className='w-full h-screen '>
            <h1 className='sm:text-5xl text-4xl font-bold  pt-20 text-center text-white'>Project</h1>
            <div className='slider-body'>
                <Slider {...settings}>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80'  src={landing} alt='' />
                        <p className='tempat'>Poftofolio Landing Page</p>
                        <p className='framework'>#Vite, #JavaScript</p>
                        <p className='detail'>
                        I've created a captivating portfolio landing page using Vite, JavaScript, and Flask, seamlessly blending swift development, dynamic interactivity, and robust backend support to showcase my projects and skills.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80'  src={crud} alt='' />
                        <p className='tempat'>RESTful CRUD</p>
                        <p className='framework'>#Python, #Flask, #Vite</p>
                        <p className='detail'>
                        I've developed a RESTful API using Python's Flask and enhanced it with Vite for frontend, enabling seamless CRUD (Create, Read, Update, Delete) actions, empowering efficient data management and interaction within the application. 
                        </p> 
                        <a href="/pagination" rel="noopener noreferrer">
                            CRUD
                        </a>
                    </div>
                </div>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80'  src={simulasi} alt='' />
                        <p className='tempat'>2D interactive simulation</p>
                        <p className='framework'>#CSharp, #Unity</p>
                        <p className='detail'>
                        I've brought a 2D interactive simulation to life by harnessing the capabilities of the Unity game engine alongside C#. This combination allows for the creation of immersive and dynamic experiences.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="main-card">
                        <img className='object-contain h-80'  src={semburat} alt='' />
                        <p className='tempat'>Point of Sale Desktop Applications</p>
                        <p className='framework'>#Java, #Spring, #JavaFX</p>
                        <p className='detail'>
                        I've skillfully developed a desktop Point of Sale (POS) application using Java Spring for backend functionality and JavaFX for the user interface, resulting in a comprehensive solution that seamlessly handles transactions and interactions in a user-friendly manner.
                        </p>
                    </div>
                </div>


                </Slider>
            </div>
        </div>

        <div className='w-full h-screen  '>
            <h1 className='sm:text-5xl text-4xl font-bold  pt-20 text-center pb-10 text-white'>Skill</h1>
            <div className='max-w-[900px] m-auto justify-center h-full pt-20'>
                <div className='flex justify-between pt-6  w-full'>
                    {/* <Tooltip title="Python"> */}
                        <BiLogoPython style={iconStyle} size={70}/>
                    {/* </Tooltip> */}
                    <BiLogoJava style={iconStyle} size={70}/>
                    <BiLogoJavascript style={iconStyle} size={70}/>
                    <BiLogoCPlusPlus style={iconStyle} size={70}/>
                    <BiLogoHtml5 style={iconStyle} size={70}/>
                    <BiLogoCss3 style={iconStyle} size={70}/>
                </div>
                <div className='flex justify-between pt-6  w-full'>
                    <BiLogoReact style={iconStyle} size={70}/>
                    <BiLogoFlask style={iconStyle} size={70}/>
                    <BiLogoPostgresql style={iconStyle} size={70}/>
                    <TbBrandCSharp style={iconStyle} size={70}/>
                    <TbBrandVite style={iconStyle} size={70}/>
                    <TbBrandMysql style={iconStyle} size={70}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main