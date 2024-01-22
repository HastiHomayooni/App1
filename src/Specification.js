import React from 'react';
import './App.css';
import Hobby from '../src/images/Hobby.jpg'
// import back from '../src/images/back.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Specification ({user,setUser}){
    const [favorites,setFavorites] =useState(user.user.favorites)
    const [hobbies,setHobbies] =useState(user.user.hobbies)
    const [education,setEducation] =useState(user.user.education)
    const [job,setJob] =useState(user.user.job)

    // if(user.user.favorites !=null){
    //     setFavorites(user.user.favorites)
    // }
    // if(user.user.hobbies !=null){
    //     setHobbies(user.user.hobbies)
    // }
    // if(user.user.education !=null){
    //     setEducation(user.user.education)
    // }
    // if(user.user.job !=null){
    //     setJob(user.user.job)
    // }

    const name=user.user.name
    const username=user.user.username
    const email=user.user.email
    const password=user.user.password
    const user_id=user.user.user_id
    // console.log(user)

    const specification = async () => {
        console.log("speee")
        try {
            console.log("oomad")
            axios.defaults.headers.put['Content-Type'] = 'application/json';
            const response = await axios.put(
                'http://localhost:5000/UserManagement',
                {
                    User: {
                        user_id: user_id,
                        username: username,
                        password: password,
                        email: email,
                        name: name,
                        favorites: favorites,
                        hobbies: hobbies,
                        education: education,
                        job: job
                    }
                }
            );
            const status = response.status;
            const data = response.data
            console.log(data)
            console.log(status)
            if(status === 200){
                setUser(data)
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
      };
    return (
        <div className='w-screen h-screen bg-myDark flex flex-col items-center'>
            <div className='w-full flex mt-5 px-8'>
                {/* <Link className='w-8' to={'/Profile'}>
                    <img className='w-8' src={back} alt='back'/>
                </Link> */}
                <div className='text-myOrange text-center ml-auto font-imprima w-auto text-2xl mr-3'>Specification</div>
            </div>
            <div className='w-full flex flex-col items-center justify-center p-8'>
                <div className='w-full mb-6 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center mr-2'>Favorites : </label>
                    <input value={favorites} onChange={(event)=> setFavorites(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark hover:bg-white hover:text-myDark' placeholder='...'/>
                </div>
                <div className='w-full mb-6 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center mr-3'>Hobbies : </label>
                    <input value={hobbies} onChange={(event)=> setHobbies(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark hover:bg-white hover:text-myDark' placeholder='...'/>
                </div>
                <div className='w-full mb-6 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center'>Education : </label>
                    <input value={education} onChange={(event)=> setEducation(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark hover:bg-white hover:text-myDark' placeholder='...'/>
                </div>
                <div className='w-full mb-4 flex justify-center rounded-2xl'>
                    <label className='text-white font-imprima text-left flex items-center mr-11'>Job : </label>
                    <input value={job} onChange={(event)=> setJob(event.target.value)} className='w-8/12 border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima focus:bg-white focus:text-myDark hover:bg-white hover:text-myDark' placeholder='...'/>
                </div>
                {(job==='' || education==='' || hobbies==='' || favorites==='') && (<div className='w-auto text-myOrange font-imprima text-left text-xs pr-10'>Please fill these boxes to help find friends with similar personality</div>)}

                <Link className='w-auto mt-5 ml-auto xl:px-48' to={'/Profile'}>
                    <div className='w-auto border-2 border-myOrange text-center font-imprima text-myOrange py-1 px-2 rounded-xl hover:bg-myOrange hover:text-myDark' onClick={specification}>Done</div>
                </Link>
            </div>
            <div className='w-full overflow-hidden'>
                <img className='w-auto p-6 md:px-20 lg:px-40 xl:px-96 mt-auto opacity-70' style={{ filter: "brightness(116%)" }} src={Hobby} alt='hobby'/>
            </div>
        </div>
    )
}
export default Specification;