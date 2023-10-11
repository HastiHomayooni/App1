import React from 'react';
import './App.css';
import friends from './images/friends.png';

function Start(){
    return (
        <div className="flex flex-col px-5 items-center justify-center bg-myOrange h-screen w-screen">
            <div className='text-white font-inspiration w-auto sm:text-8xl text-7xl text-center '>Hi Buddy</div>
            <img src={friends} alt='friends'/>
            <div className='text-white font-Imprima text-center my-10 text-xl sm:text-2xl lg:text-3xl'>We help you to find friends with similar personality and interests</div>
            <div className='bg-myDark rounded-3xl py-4 px-8 w-auto text-white text-center font-imprima'>Getting started</div>
            <div className='flex justify-between items-center mt-3'>
                <div className='text-myDark w-auto text-sm'>Already have an account ?</div>
                <div className='text-white ml-2 text-sm'><b>Log in</b></div>
            </div>
        </div>
    );
}
export default Start;