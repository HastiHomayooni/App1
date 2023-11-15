import React from 'react';
import './App.css';
import Hobby from '../src/images/Hobby.jpg'
import back from '../src/images/back.png'
import { Link } from "react-router-dom";
import { useState } from 'react';

function Specification (){
    const [favorites,setFavorites] =useState('')
    const [hobbies,setHobbies] =useState('')
    const [education,setEducation] =useState('')
    const [job,setJob] =useState('')
    return (
        <div className='w-screen h-screen bg-myDark flex flex-col items-center'>
            <div className='w-full flex mt-10 px-8'>
                <Link className='w-8 mr-auto' to={'/Profile'}>
                    <img className='w-8' src={back} alt='back'/>
                </Link>
                <div className='text-myOrange text-center font-imprima w-auto text-2xl mr-3'>Specification</div>
            </div>
            <div className='w-full flex flex-col items-center justify-center p-8'>
                <div className='w-full mb-4 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center mr-2'>Favorites : </label>
                    <input value={favorites} onChange={(event)=> setFavorites(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark' placeholder='...'/>
                </div>
                <div className='w-full mb-4 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center mr-3'>Hobbies : </label>
                    <input value={hobbies} onChange={(event)=> setHobbies(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark' placeholder='...'/>
                </div>
                <div className='w-full mb-4 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center'>education : </label>
                    <input value={education} onChange={(event)=> setEducation(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark' placeholder='...'/>
                </div>
                <div className='w-full mb-4 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center mr-11'>job : </label>
                    <input value={job} onChange={(event)=> setJob(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark' placeholder='...'/>
                </div>
            </div>
            <img className='w-auto p-6 md:px-20 lg:px-80 mt-auto opacity-90' style={{ filter: "brightness(116%)" }} src={Hobby} alt='hobby'/>
        </div>
    )
}
export default Specification;