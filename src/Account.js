import React from 'react';
import './App.css';
import { useState } from 'react';
// import { Link } from "react-router-dom";

import camera from './images/camera.png';

function Account(){
    const [Camera,setCamera]=useState(camera);
    function handleChange(e) {
        console.log(e.target.files);
        setCamera(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <div className='w-screen h-screen bg-gray-200 flex items-center justify-center'>
            <div className='w-screen h-screen sm:w-max sm:px-12 sm:mx-auto bg-white flex-col items-center justify-center'>
                <div className='w-32 h-32 mx-auto rounded-full p-0.5 bg-myOrange'>
                    <img className={`w-full h-full object-cover ${Camera === camera ? 'p-6' : 'rounded-full'}`} src={Camera} alt='camera'/>
                </div>
                <div className='w-8 h-8 rounded-full border-2 bg-white border-myOrange relative -mt-8' style={{marginLeft:'55%'}}>            
                    <input className='w-7 h-6 opacity-0' type="file" onChange={handleChange} />
                    <div className='w-auto text-myOrange text-3xl ml-1 -mt-8'>+</div>
                </div>
            </div>
        </div>
    )
}
export default Account;