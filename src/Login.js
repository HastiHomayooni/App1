import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className='w-screen h-screen bg-gray-100 flex items-center justify-center sm:p-4'>
            <div className='w-screen h-screen sm:w-auto sm:h-auto bg-white flex flex-col items-center justify-center sm:rounded-3xl p-4 sm:px-20 sm:py-10'>
                <div className='w-auto font-imprima text-myDark text-3xl text-center'><b>Log In Now</b></div>
                <div className='w-auto text-center font-imprima text-sm text-gray-500 mt-3'>please login to continue our app</div>
                <div className='flex flex-col my-5 w-auto'>
                    <input className='border-2 placeholder:font-imprima placeholder:text-center text-center border-myDark w-auto mx-2 my-2 mt-4 md:px-6 md:py-4 px-3 py-3 rounded-3xl hover:border-myOrange focus:border-myOrange focus:outline-none' type='email' placeholder='Email'/>
                    <input className='border-2 placeholder:font-imprima placeholder:text-center text-center border-myDark w-auto mx-2 mt-2 md:px-6 md:py-4 px-3 py-3 rounded-3xl hover:border-myOrange focus:border-myOrange focus:outline-none' type='password' placeholder='Password'/>
                    <Link className='w-auto' to={''}>
                        <div className='text-right w-auto mx-2 md:px-6 md:py-3 px-3 py-2 text-myOrange text-sm'>Forget Password?</div>
                    </Link>
                    <Link className='w-auto' to={''}>
                        <div className='bg-myOrange rounded-3xl mx-2 py-4 px-8 w-auto text-white text-center text-lg font-imprima mt-6'>Log in</div>
                    </Link>
                    <div className='flex justify-between items-center mt-4 mx-4'>
                        <div className='text-myDark w-auto text-sm mr-2 ml-auto'>Don't have an account ?</div>
                        <Link className='w-auto' to={'/SignUp'}>
                            <div className='text-myOrange ml-2 text-sm mr-auto'><b>Sign Up</b></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;