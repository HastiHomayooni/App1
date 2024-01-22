import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import camera from './images/camera.png';
import next from './images/next.png';
import axios from 'axios';

function Profile({user,setUser}){
    const favorites=user.user.favorites
    console.log(favorites)
    console.log(user)
    const hobbies=user.user.hobbies
    const education=user.user.education
    const job=user.user.job
    const email=user.user.email
    const password=user.user.password
    const user_id=user.user.user_id

    const [Name,setName]=useState(user.user.name)
    const [Username,setUsername]=useState(user.user.username)

    const [Date, setDate] = useState(user.user.date);
    const [Gender, setGender] = useState(user.user.gender);
    const [Camera,setCamera]=useState(camera);
    const [confirm,setConfirm] = useState(false);
    // const [change,setChange] = useState(false)

    const [nameV,setNameV] = useState(true);
    const [usernameV,setUsernameV] = useState(true);
    const nameRegex = /^[a-zA-Z \-']+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    function changeName(e){
        const value = e.target.value;
        const isValid = nameRegex.test(value);
        if(value==="") {
            setNameV(true)
        }else{
            setNameV(isValid);
        }
        setName(value);
    }
    function changeUsername(e){
        const value = e.target.value;
        const isValid = usernameRegex.test(value);
        if(value==="") {
            setUsernameV(true)
        }else{
            setUsernameV(isValid);
        }
        setUsername(value);
    }

    function handleChange(e) {
        console.log(e.target.files);
        console.log(URL.createObjectURL(e.target.files[0]));
        setCamera(URL.createObjectURL(e.target.files[0]));
    }

    const done = async () => {
        console.log("speee")
        if(Name !==''&& nameV && Username !=='' && usernameV){
            setConfirm(true)
            try {
                console.log("oomad")
                console.log(Date)
                console.log(Gender)
                axios.defaults.headers.put['Content-Type'] = 'application/json';
                const response = await axios.put(
                    'http://localhost:5000/UserManagement',
                    {
                        User: {
                            user_id: user_id,
                            username: Username,
                            password: password,
                            email: email,
                            name: Name,
                            favorites: favorites,
                            hobbies: hobbies,
                            education: education,
                            job: job,
                            Date: Date,
                            gender: Gender
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
                alert("This username is already used")
                console.error('Error fetching address:', error);
            }
        }else{
            setConfirm(true)
        }
      };
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
                            value={Name} onChange={e => changeName(e)} onBlur={()=>{if(!nameV) alert('Valid Name:letters,spaces,and hyphens')}} placeholder='Name' type='text'/>
                    </div>
                    {Name ==='' && confirm && (<div className='w-auto font-imprima text-right ml-auto text-red-500 text-xs'>You should fill the name.</div>)}
                    {Name !=='' && !nameV && confirm && (<div className='w-auto font-imprima text-right ml-auto text-red-500 text-xs'>Invalid Name</div>)}
                    <div className='w-auto flex justify-between my-5 px-2 py-1'>
                        <div className='w-auto font-imprima text-gray-400'>Username</div>
                        <input className='w-44 sm:w-64 outline-none border-b pl-3 border-gray-200 text-myDark font-imprima' style={{borderBottomWidth: '1.5px'}}
                            value={Username} onChange={e => changeUsername(e)} onBlur={()=>{if(!usernameV) alert('Valid Username:letters,underscores,with a minimum length of 3 characters')}} type='text' placeholder='Username'/> 
                    </div>
                    {Username ==='' && confirm && (<div className='w-auto font-imprima text-right text-red-500 text-xs'>You should fill the username.</div>)}
                    {Username !=='' && !usernameV && confirm && (<div className='w-auto font-imprima text-right text-red-500 text-xs'>Invalid Username</div>)}
                    <div className='w-auto flex justify-between my-5 px-2 py-1'>
                        <div className='w-auto font-imprima text-gray-400 mr-3'>Date of birth</div>
                        <input type='date' value={Date} onChange={(event) => setDate(event.target.value)} className='w-44 sm:w-64 outline-none border-b pl-3 border-gray-200 text-myDark font-imprima' style={{ borderBottomWidth: '1.5px' }}/>
                    </div>
                    <div className='w-auto flex justify-between my-5 px-2 py-1'>
                        <div className='w-auto font-imprima text-gray-400'>Gender</div>
                        <select value={Gender} onChange={(event)=> setGender(event.target.value)} className='w-44 bg-white sm:w-64 outline-none border-b pl-3 border-gray-200 text-myDark font-imprima' style={{borderBottomWidth: '1.5px'}}>
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
                    <Link className='w-auto' to={'/Login'}>
                        <div className='w-auto font-imprima text-gray-400 text-lg'>Logout</div>
                    </Link>
                    <Link className='w-auto' to={(Name && Username && nameV && usernameV) ? '/Map' : ''}>
                        <div className='w-auto border-2 border-myOrange text-center font-imprima text-myOrange py-1 px-2 rounded-xl hover:bg-myOrange hover:text-white' onClick={done}>Done</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Profile;