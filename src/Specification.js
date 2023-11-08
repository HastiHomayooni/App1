import React from 'react';
import './App.css';
import Hobby from '../src/images/hobby.jpg'
import { Link } from "react-router-dom";
import { useState } from 'react';

function Specification (){
    return (
        <div className='w-screen h-screen bg-white p-10 flex flex-col items-center justify-center'>
            <img className='w-auto px-10 mb-0' src={Hobby} alt='hobby'/>
            <div className='w-auto bg-myDark rounded-2xl p-3 flex flex-col items-center justify-center'>
                <div className='w-auto mb-4 flex justify-between rounded-2xl'>
                    <div className='w-auto py-2 px-10 rounded-2xl bg-myOrange text-white font-imprima text-xl mx-2'>description</div>
                    <div className='w-auto py-2 px-10 rounded-2xl bg-myOrange text-white font-imprima text-xl mx-2'>title</div>
                </div>
                <div className='w-auto mb-4 flex justify-between rounded-2xl'>
                    <input className='w-auto border border-slate-300 py-2 px-4 mx-2 rounded-2xl outline-none bg-transparent text-white font-imprima' placeholder='...'/>
                    <select className='w-auto border border-slate-300 py-2 px-4 mx-2 rounded-2xl bg-transparent outline-none text-white font-imprima'>
                        <option className='text-myDark font-imprima' value='female'>Female</option>
                        <option className='text-myDark font-imprima' value='male'>Male</option>
                        <option className='text-myDark font-imprima' value='others'>Others</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Specification;