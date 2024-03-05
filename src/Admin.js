import React, { useState } from 'react';
import './App.css';
import friends from './images/friends.png';
import { Link } from "react-router-dom";
import axios from 'axios';

function Start(){
    const [Array,setArray]=useState([])
    const done = async () => {
        console.log("speee")
            
            try {
                console.log("oomad")
                axios.defaults.headers.put['Content-Type'] = 'application/json';
                const response = await axios.put(
                    'http://localhost:5000/Logs',
                    {
                        
                    }
                );
                const status = response.status;
                const data = response.data
                console.log(data)
                console.log(status)
                setArray(data)
            } catch (error) {
                alert("This username is already used")
                console.error('Error fetching address:', error);
            }
      };
    return(
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-auto bg-myOrange p-3 cursor-pointer' onClick={done}>Panel Admin</div>
            <div className='w-auto flex flex-col items-center justify-center'>
                {Array.map((user)=>(
                    <>
                        <div key={user.user.user_id} className='w-auto flex'>
                            <div className='w-auto mr-1 text-myOrange'>user_id:</div>
                            <div className='w-auto mr-2'>{user.user.user_id}|</div>
                            <div className='w-auto mr-1 text-myOrange'>username:</div>
                            <div className='w-auto mr-2'>{user.user.username}|</div>
                            <div className='w-auto mr-1 text-myOrange'>email:</div>
                            <div className='w-auto'>{user.user.email}</div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}
export default Start;