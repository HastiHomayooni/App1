import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import camera from './images/camera.png';
import next from './images/next.png';

function Profile(){
    const [Name,setName]=useState('Name')
    const [Username,setUsername]=useState('Username')
    const [Date, setDate] = useState(null);
    const [Camera,setCamera]=useState(camera)
    function handleChange(e) {
        console.log(e.target.files);
        setCamera(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <div className='w-screen h-screen bg-gray-200 flex items-center justify-center'>
            <div className='w-screen h-screen sm:w-max sm:px-12 sm:mx-auto bg-white flex-col items-center justify-center'>
                <div className='w-auto text-left font-imprima text-myDark text-3xl mr-auto px-7 py-5'>My Profile</div>
                <div className='w-32 h-32 mx-auto rounded-full p-0.5 bg-myOrange'>
                    <img className={`w-full h-full object-cover ${Camera === camera ? 'p-6' : 'rounded-full'}`} src={Camera} alt='camera'/>
                </div>
                <div className='w-8 h-8 rounded-full border-2 bg-white border-myOrange relative -mt-8' style={{marginLeft:'55%'}}>            
                    <input className='w-7 h-6 opacity-0' type="file" onChange={handleChange} />
                    <div className='w-auto text-myOrange text-3xl ml-1 -mt-8'>+</div>
                </div>
                <div className='w-auto font-imprima text-myOrange text-2xl text-center my-2 mb-4'>{Name}</div>
                <div className='w-auto mx-7 bg-gray-200' style={{height: '1.4px'}}></div>
                <div className='w-auto flex-col items-center justify-center mx-7'>
                    <div className='w-auto flex justify-between my-5 px-2 py-1'>
                        <div className='w-auto font-imprima text-gray-400'>Name</div>
                        <input className='w-44 sm:w-64 outline-none border-b pl-3 border-gray-200 text-myDark font-imprima' style={{borderBottomWidth: '1.5px'}}
                            value={Name}/>
                    </div>
                    <div className='w-auto flex justify-between my-5 px-2 py-1'>
                        <div className='w-auto font-imprima text-gray-400'>Username</div>
                        <input className='w-44 sm:w-64 outline-none border-b pl-3 border-gray-200 text-myDark font-imprima' style={{borderBottomWidth: '1.5px'}}
                            value={Username}/>
                    </div>
                    <div className='w-auto flex justify-between my-5 px-2 py-1'>
                        <div className='w-auto font-imprima text-gray-400 mr-3'>Date of birth</div>
                        <DatePicker
                            className='w-44 sm:w-64 outline-none border-b pl-3 border-gray-200 text-myDark font-imprima'
                            style={{ borderBottomWidth: '1.5px' }}
                            selected={Date}
                            onChange={date => setDate(date)}
                            placeholderText='Select a Date'
                        />
                    </div>
                    <div className='w-auto flex justify-between my-5 px-2 py-1'>
                        <div className='w-auto font-imprima text-gray-400'>Gender</div>
                        <select className='w-44 sm:w-64 outline-none border-b pl-3 border-gray-200 text-myDark font-imprima' style={{borderBottomWidth: '1.5px'}}>
                            <option value='female'>Female</option>
                            <option value='male'>Male</option>
                            <option value='others'>Others</option>
                        </select>
                    </div>
                </div>
                <div className='w-auto rounded-2xl bg-myDark flex justify-between p-3 px-4 mx-7 mt-10 mb-8'>
                    <div className='w-auto font-imprima text-white text-lg text-center my-auto'>Specification</div>
                    <Link className='w-auto' to={'/Specification'}>
                        <img className='w-8' src={next} alt='next'/>
                    </Link>
                </div>
                <div className='w-auto flex justify-between mx-11'>
                    <div className='w-auto font-imprima text-gray-400 text-lg'>Skip</div>
                    <div className='w-auto border-2 border-myOrange text-center font-imprima text-myOrange py-1 px-2 rounded-xl'>Done</div>
                </div>
            </div>
        </div>
    )
}
export default Profile;