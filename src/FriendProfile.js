import React from 'react';
import './App.css';
import { useState } from 'react';
// import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import girl from './images/girl.png';
import back from './images/back2.png';
import loc from './images/loc.png';
import gender from './images/gender.png';
import calender from './images/calendar.png';
import botLoc from './images/bot_location.png';
import botChat from './images/bot_chat.png';
import botUser from './images/bot_user.png';
import chatroom from './images/chatroom.png';
import { Link } from 'react-router-dom';

function FriendProfile({posts}){
    const [Name,setName]=useState('Name')
    const [Username,setUsername]=useState('Username')
    const [Date, setDate] = useState('mm/dd/yyyy');
    const [Gender, setGender] = useState('Gender');
    const [Location, setLocation] = useState('Location');
    const [Favorite, setFavorite] = useState('');
    const [Hobbies, setHobbies] = useState('');
    const [Education, setEducation] = useState('');
    const [Job, setJob] = useState('');
    const [prof, setProf] = useState(true);

    const [swiper, setSwiper] = useState(null);

    const onSwiperUpdate = () => {
    swiper && swiper.update(); // Update the Swiper instance when the number of slides changes
    };

    return(
        <div className='w-screen h-screen bg-gray-200 overflow-y-scroll flex items-center justify-center'>
            <div className='w-screen h-screen relative sm:w-auto flex items-center flex-col'>
                <img src={girl} alt="Cover" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className='w-full flex px-2 items-center mb-auto'>
                        <Link className='w-1/6' to={'/Map'}>
                            <img src={back} alt='back' className='w-auto p-2'/>
                        </Link>
                        <h1 className="text-white text-4xl font-bold font-imprima">{Username}</h1>
                        <Link className='w-auto p-1 ml-auto' to={''}>
                            <img src={chatroom} alt='chatroom' className='w-auto'/>
                        </Link>
                    </div>

                    <div className="absolute top-2/3 bg-myDark rounded-t-full h-full opacity-60 w-full flex flex-col justify-center items-start">
                        <div className='w-auto flex flex-col mb-12 -mt-14 ml-16'>
                            <div className='w-auto text-myOrange font-imprima text-3xl'>{Name}</div>
                            <div className='w-auto flex mt-3'>
                                <img src={loc} alt='location' className='w-1/6 mr-3 py-1'/>
                                <div className='w-auto text-white text-xl font-imprima'>{Location}</div>
                            </div>
                            <div className='w-auto flex mt-1'>
                                <img src={gender} alt='gender' className='w-2/6 mr-3 -ml-2'/>
                                <div className='w-auto text-white text-xl font-imprima'>{Gender}</div>
                            </div>
                            <div className='w-auto flex mt-1'>
                                <img src={calender} alt='date' className='w-1/6 mr-3 py-1 ml-1'/>
                                <div className='w-auto text-white text-xl font-imprima'>{Date}</div>
                            </div>
                        </div>
                        <div className='w-full mb-8 flex px-20 justify-between items-center'>
                            <button className='w-auto border-2 border-white px-5 py-1 font-imprima text-white focus:text-myDark focus:bg-slate-100' onClick={()=>setProf(true)}>Profile</button>
                            <button className='w-auto border-2 border-white px-5 py-1 font-imprima text-white focus:text-myDark focus:bg-slate-100' onClick={()=>setProf(false)}>Posts</button>
                        </div>
                        {prof &&(<div className='w-full mb-10 flex flex-col px-14 justify-between items-center'>
                            <div className='w-full flex items-center justify-between'>
                                <div className='w-auto text-white font-imprima mr-4'>Favorite:</div>
                                <div className='w-4/5 border-b-2 border-myOrange text-white font-imprima'>{Favorite}</div>
                            </div>
                            <div className='w-full flex items-center justify-between mt-5'>
                                <div className='w-auto text-white font-imprima mr-4'>Hobbies:</div>
                                <div className='w-4/5 border-b-2 border-myOrange text-white font-imprima'>{Hobbies}</div>
                            </div>
                            <div className='w-full flex items-center justify-between mt-5'>
                                <div className='w-auto text-white font-imprima mr-4'>Education:</div>
                                <div className='w-4/5 border-b-2 border-myOrange text-white font-imprima'>{Education}</div>
                            </div>
                            <div className='w-full flex items-center justify-between mt-5'>
                                <div className='w-auto text-white font-imprima mr-4'>Job:</div>
                                <div className='w-4/5 border-b-2 border-myOrange text-white font-imprima'>{Job}</div>
                            </div>
                        </div>)}
                        {!prof &&(
                            <div className='w-5/6 mb-5 mx-auto h-2/6 flex flex-col justify-between items-center bg-white'>
                                <div className='w-full overflow-hidden'>
                                    <Swiper navigation={true} modules={[Navigation]} onSwiper={(swiper) => setSwiper(swiper)} onSlideChange={onSwiperUpdate} className="mySwiper">  
                                        <SwiperSlide>
                                            {posts.length > 0 ? (
                                                <>
                                                {posts.map((post, index) => (
                                                    <div key={index} className="w-full">
                                                        <img className='w-auto overflow-hidden object-cover' src={post} alt={`Post ${index}`} />
                                                    </div>
                                                ))}
                                                </>
                                            ) : (
                                                <div className="w-full">No posts to display.</div>
                                            )}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        )}
                        {prof &&(<div className='w-full flex px-10 justify-between items-center'>
                            <Link className='w-auto' to={''}>
                                <button className='w-auto bg-white rounded-2xl font-bold px-8 text-lg py-2 font-imprima text-myOrange'>Fallow</button>
                            </Link>
                            <Link className='w-auto' to={''}>
                                <button className='w-auto bg-white rounded-2xl px-6 text-lg py-2 font-imprima text-myDark'>Message</button>
                            </Link>
                        </div>)}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FriendProfile;