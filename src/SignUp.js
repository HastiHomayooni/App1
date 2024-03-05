import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
// import Phone from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import call from './images/call.png'

function SignUp({setUser}){
    const [boolNumber,setboolNumber] = useState(false);
    const [Number,setNumber] = useState('');
    const [code,setCode] = useState('');
    const [codeSent,setCodeSent] = useState('');

    const [confirm,setConfirm] = useState(false);
    const [create,setCreate] = useState(false)

    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [emailV,setEmailV] = useState(true);
    const [nameV,setNameV] = useState(true);
    const [usernameV,setUsernameV] = useState(true);
    const [passwordV,setPasswordV] = useState(true);

    const nameRegex = /^[a-zA-Z \-']+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
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

    const Signup = async () => {
        if(name !==''&& nameV && username !=='' && usernameV && email !=='' && emailV && password !=='' && passwordV){
            setConfirm(true)
            try {
                axios.defaults.headers.post['Content-Type'] = 'application/json';

                const response = await axios.post(
                    'http://localhost:5000/UserManagement',
                    {
                        User: {
                            username: username,
                            password: password,
                            email: email,
                            name: name
                        }
                    }
                );
                const status = response.status;
                const data = response.data
                console.log(data)
                console.log(status)
                if(status === 200){
                    setUser(data)
                    setCreate(true)
                }
            } catch (error) {
                alert("This username/email is already used")
                console.error('Error fetching address:', error);
            }
        }else{
            setConfirm(true)
        }
      };

    function sendCode(){
        if (Number ===''){
            alert('Please fill your phone number')
        }else{
            alert('We sent code to your phone number')
            let cSent=100+Math.floor(Math.random() * 9999)
            console.log(cSent)
            setCodeSent(cSent)
        }
    }

    function next(){
        if(codeSent ===''){
            alert('Please fill your phone number')
        }else{
            if(codeSent==code){
                setboolNumber(true)
            }else{
                alert('code is incorrect')
            }
        }
    }
    return(
        <div className='w-screen h-screen bg-gray-100 flex items-center justify-center sm:p-4'>
            <div className='w-screen h-screen sm:w-auto sm:h-auto bg-white flex flex-col items-center justify-center sm:rounded-3xl p-4 sm:px-20 sm:py-10'>
                <div className='w-auto font-imprima text-myDark text-3xl text-center'><b>Sign up Account</b></div>
                <div className='w-auto text-center font-imprima text-sm text-gray-500 mt-3'>please fill the details and create account</div>
                {boolNumber &&(<div className='flex flex-col my-5 w-auto'>
                    <div className='flex flex-col w-auto my-2 md:flex-row'>
                        <div className='flex flex-col w-auto'>
                            <input className='border-2 placeholder:font-imprima placeholder:text-center text-center bg-gray-100 border-gray-100 w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl focus:border-myDark focus:outline-none'
                                value={name} onChange={e => changeName(e)} onBlur={()=>{if(!nameV) alert('Valid Name:letters,spaces,and hyphens')}} type='text' placeholder='Name'/>
                            {name ==='' && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>You should fill the name.</div>)}
                            {name !=='' && !nameV && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>Invalid Name</div>)}
                        </div>
                        
                        <div className='flex flex-col w-auto'>
                            <input className='border-2 placeholder:font-imprima placeholder:text-center text-center bg-gray-100 border-gray-100 w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl focus:border-myDark focus:outline-none'
                                value={username} onChange={e => changeUsername(e)} onBlur={()=>{if(!usernameV) alert('Valid Username:letters,underscores,with a minimum length of 3 characters')}} type='text' placeholder='Username'/>
                            {username ==='' && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>You should fill the username.</div>)}
                            {username !=='' && !usernameV && confirm && (<div className='w-auto font-imprima text-left text-red-500 mx-2 md:px-6 px-3 text-xs'>Invalid Username</div>)}
                        </div>                        
                    </div>

                    <div className='flex flex-col w-auto my-2 md:flex-row'>
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
                    </div>
                    <Link className='w-auto' to={(email !== '' && password !== '' && passwordV && emailV && username !=='' && usernameV && name !=='' && nameV && create) ? '/Specification' : ''}>
                        <div className='bg-myOrange rounded-3xl mx-2 py-4 px-8 w-auto text-white text-center font-imprima mt-10' onClick={Signup}>Create Account</div>
                    </Link>
                    <div className='flex justify-between items-center mt-4 mx-4'>
                        <div className='text-myDark w-auto text-sm mr-2 ml-auto'>Already have an account ?</div>
                        <Link className='w-auto' to={'/Login'}>
                            <div className='text-myOrange ml-2 text-sm mr-auto'><b>Log in</b></div>
                        </Link>
                    </div>
                </div>)}
                {!boolNumber &&(<div className='flex flex-col items-center my-5 w-auto'>
                    <div className='w-full flex'>
                        <img className='w-6 py-6' src={call} alt='phone number'/>
                        <input className='border-2 placeholder:font-imprima placeholder:text-center text-center bg-gray-100 border-gray-100 w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl focus:border-myDark focus:outline-none'
                            value={Number} onChange={e => setNumber(e.target.value)}  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type='text' placeholder='09**-***-****'/>
                    </div>
                    <input className='border-2 placeholder:font-imprima placeholder:text-center text-center bg-transparent border-gray-100 w-auto mx-2 my-2 md:px-6 md:py-3 px-3 py-2 rounded-3xl focus:border-myDark focus:outline-none'
                            value={code} onChange={e => setCode(e.target.value)}  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type='text' placeholder='code sent'/>
                    <button className='bg-transparent border-myDark border-2 rounded-3xl mx-2 py-3 px-8 w-auto text-myDark text-center font-imprima mt-5' onClick={sendCode}>Send verification code</button>
                    <button className='bg-myOrange rounded-3xl mx-2 py-4 px-8 w-auto text-white text-center font-imprima mt-10' onClick={next}>Confirm</button>
                </div>)}
            </div>
        </div>
    )
}
export default SignUp;