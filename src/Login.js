import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Login(){
    const [confirm,setConfirm] = useState(false);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [emailV,setEmailV] = useState(true);
    const [passwordV,setPasswordV] = useState(true);

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^\S{6,}$/;

    function changeEmail(e){
        const value = e.target.value;
        const isValid = emailRegex.test(value);
        if(value==="") {
            setEmailV(true)
        }else{
            setEmailV(isValid);
        }
        setEmail(value);
    }
    function changePassword(e){
        const value = e.target.value;
        const isValid = passwordRegex.test(value);
        if(value==="") {
            setPasswordV(true)
        }else{
            setPasswordV(isValid);
        }
        setPassword(value);
    }
    return(
        <div className='w-screen h-screen bg-gray-100 flex items-center justify-center sm:p-4'>
            <div className='w-screen h-screen sm:w-auto sm:h-auto bg-white flex flex-col items-center justify-center sm:rounded-3xl p-4 sm:px-20 sm:py-10'>
                <div className='w-auto font-imprima text-myDark text-3xl text-center'><b>Log In Now</b></div>
                <div className='w-auto text-center font-imprima text-sm text-gray-500 mt-3'>please login to continue our app</div>
                <div className='flex flex-col my-5 w-auto'>
                    <div className='flex flex-col w-auto'>
                        <input className='border-2 placeholder:font-imprima placeholder:text-center text-center bg-gray-100 border-gray-100 w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl focus:border-myDark focus:outline-none'
                            value={email} onChange={e => changeEmail(e)} type='email' placeholder='Email'/>
                        {email ==='' && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>You should fill the email.</div>)}
                        {email !=='' && !emailV && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>Invalid email.</div>)}
                    </div>
                    
                    <div className='flex flex-col w-auto'>
                        <input className='border-2 placeholder:font-imprima placeholder:text-center text-center bg-gray-100 border-gray-100 w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl focus:border-myDark focus:outline-none'
                            value={password} onChange={e => changePassword(e)} onBlur={()=>{if(!passwordV) alert('Valid Password:minimum of 6 characters,except whitespace')}} type='password' placeholder='Password'/>
                        {password ==='' && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>You should fill the password.</div>)}
                        {password !=='' && !passwordV && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>Invalid Password</div>)}
                    </div>

                    <Link className='w-auto' to={'/Profile'}>
                        <div className='bg-myOrange rounded-3xl mx-2 py-4 px-8 w-auto text-white text-center text-lg font-imprima mt-8' onClick={() => setConfirm(true)}>Log in</div>
                    </Link>

                    <div className='flex justify-between items-center mt-8 mx-4'>
                        <div className='text-myDark w-auto text-sm mr-2 ml-auto'>Don't have an account ?</div>
                        <Link className='w-auto' to={'/SignUp'}>
                            <div className='text-myOrange ml-2 text-sm mr-auto'><b>Sign Up</b></div>
                        </Link>
                    </div>

                    <Link className='w-auto' to={''}>
                        <div className='text-left w-auto mx-4 text-myOrange text-sm mt-1'>Forget Password?</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Login;