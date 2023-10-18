import React from 'react';
import './App.css';
import friends from './images/friends.png';
import { Link } from "react-router-dom";

function Start(){
    return (
        <div className="flex flex-col px-4 items-center justify-center bg-myOrange h-screen w-screen">
            <div className='text-white font-inspiration w-auto lg:text-8xl -mb-5 mt-2 text-7xl text-center '>Hi Buddy</div>
            <img className='' style={{ filter: "brightness(125%)" }} src={friends} alt='friends'/>
            <div className='text-white font-Imprima text-center my-9 lg:my-7 text-xl lg:text-3xl'>We help you to find friends with similar personality and interests</div>
            <Link className='w-auto' to={'/SignUp'}>
                <div className='bg-myDark rounded-3xl py-4 px-8 w-auto text-white text-center font-imprima'>Getting started</div>
            </Link>
            <div className='flex justify-between items-center mt-3 mb-2'>
                <div className='text-myDark w-auto text-sm'>Already have an account ?</div>
                <Link className='w-auto' to={'/Login'}>
                    <div className='text-white ml-2 text-sm'><b>Log in</b></div>
                </Link>
            </div>
        </div>
    );
}
export default Start;