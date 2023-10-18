import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function SignUp(){
    return(
        <div className='w-screen h-screen bg-gray-100 flex items-center justify-center sm:p-4'>
            <div className='w-screen h-screen sm:w-auto sm:h-auto bg-white flex flex-col items-center justify-center sm:rounded-3xl p-4 sm:px-20 sm:py-10'>
                <div className='w-auto font-imprima text-myDark text-3xl text-center'><b>Sign up Account</b></div>
                <div className='w-auto text-center font-imprima text-sm text-gray-500 mt-3'>please fill the details and create account</div>
                <div className='flex flex-col my-5 w-auto'>
                    <div className='flex flex-col w-auto my-2 md:flex-row'>
                        <input className='border-2 placeholder:font-imprima placeholder:text-center text-center border-myDark w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl hover:border-myOrange focus:border-myOrange focus:outline-none' type='text' placeholder='First Name'/>
                        <input className='border-2 placeholder:font-imprima placeholder:text-center text-center border-myDark w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl hover:border-myOrange focus:border-myOrange focus:outline-none' type='text' placeholder='Last Name'/>
                    </div>
                    <div className='flex flex-col w-auto my-2 md:flex-row'>
                        <input className='border-2 placeholder:font-imprima placeholder:text-center text-center border-myDark w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl hover:border-myOrange focus:border-myOrange focus:outline-none' type='email' placeholder='Email'/>
                        <input className='border-2 placeholder:font-imprima placeholder:text-center text-center border-myDark w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl hover:border-myOrange focus:border-myOrange focus:outline-none' type='password' placeholder='Password'/>
                    </div>
                    <Link className='w-auto' to={''}>
                        <div className='bg-myOrange rounded-3xl mx-2 py-4 px-8 w-auto text-white text-center font-imprima mt-10'>Create Account</div>
                    </Link>
                    <div className='flex justify-between items-center mt-4 mx-4'>
                        <div className='text-myDark w-auto text-sm mr-2 ml-auto'>Already have an account ?</div>
                        <Link className='w-auto' to={'/Login'}>
                            <div className='text-myOrange ml-2 text-sm mr-auto'><b>Log in</b></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp;