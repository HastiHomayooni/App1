import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

import { useEffect, useState } from 'react';
import axios from 'axios';

import mark from '../src/images/mark.png'
import back from '../src/images/back2.png'
import search from '../src/images/search.png'

import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { FreeMode, Scrollbar, Mousewheel} from 'swiper/modules';
import 'swiper/css';

const Mark = L.icon({
    iconUrl: mark,
    iconSize: [120, 50],
    iconAnchor: [16, 32],
    });
function Map(){
    const [userLocation,setUserLocation] =useState([36.5626, 53.0602]);
    const [address,setAddress] =useState('')
    const [addresses, setAddresses] = useState([]);
    const [bool,setBool] = useState(false);

    const handleMarkerDrag =async (e) => {
        const LatLng=e.target.getLatLng();
        setUserLocation(LatLng);
        try {
          const response = await axios.get(
            `https://api.neshan.org/v5/reverse?lat=${LatLng.lat}&lng=${LatLng.lng}`,
            {
              headers: {
                'Api-Key': 'service.JU5yHIPjoFIQD5DLUPmbEkVJf0rCyR8hLdQtWFNk'
              }
            }
          );
          const data = response.data;
          const address = data.formatted_address;
          setAddress(address);
        } catch (error) {
          console.error('Error fetching address:', error);
        }
    };
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log(position);
                    setUserLocation([latitude, longitude]);
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser");
        }
    }, []);
    
    const handleChange= async (event) =>{
        const inputText = event.target.value;
        setAddress(inputText)
        setBool(true)
        if(inputText.trim()!==''){
            try{
                const response = await axios.get(
                    `https://api.neshan.org/v1/search?term=${encodeURIComponent(inputText)}&lat=36.565546&lng=53.05`,
                    {
                      headers: {
                        'Api-Key': 'service.JU5yHIPjoFIQD5DLUPmbEkVJf0rCyR8hLdQtWFNk'
                      }
                    }
                );

                const data = response.data;
                const matchingAddresses = data.items;
                setAddresses(matchingAddresses);

            }catch(error){
                console.error('Error fetching addresses:', error);
            }
        } else {
            setAddresses([]);
        }
            addresses.map((address) =>(console.log(address)));
    }

    return(
        <>
            <div className='w-screen h-screen flex flex-col items-center'>
                <div className='w-11/12 xl:w-9/12 flex'>
                    <div className='absolute w-auto mr-auto bg-white my-4 p-1 z-10 rounded-2xl'>
                        <Link to={''}>
                            <img className='w-10 py-1' src={back} alt="back" />
                        </Link>
                    </div>
                </div>
                <div className='rounded-t-3xl py-4 sm:px-5 h-auto w-11/12 xl:w-9/12 mx-auto bg-white flex flex-col items-center justify-center absolute bottom-0 z-10'>
                    <div className='w-3/4 flex flex-col items-center justify-center'>
                        <div className='w-auto font-imprima text-center text-myDark mt-3 mb-5 sm:text-xl'>please choose your location</div>
                        <div className='w-full flex p-1 pl-2 items-center justify-between bg-myOrange rounded-xl'>
                            <img className='w-12' src={search} alt="search"/>
                            <input className='w-4/5 px-4 py-3 rounded-xl outline-none text-xl text-center font-imprima text-black' onChange={handleChange} placeholder='Your Location' value={address}/>
                        </div>
                        {bool && address && addresses.length > 0 && (
                            <div className='w-full px-4 overflow-hidden border-x-2 border-b-2 border-gray-200 rounded-b-xl h-auto max-h-20 mx-8 mb-7 flex flex-col justify-between items-end'>
                                <Swiper
                                    direction={'vertical'}
                                    slidesPerView={'auto'}
                                    freeMode={true}
                                    scrollbar={true}
                                    mousewheel={true}
                                    modules={[FreeMode, Scrollbar, Mousewheel]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        {addresses.map((address) => (
                                            <>
                                                <div className='w-full text-lg my-2 font-imprima text-right cursor-pointer' 
                                                    onClick={() =>{ setAddress(address.title);
                                                        setBool(false);
                                                        setUserLocation([address.location.y, address.location.x]);}} key={address.id}>{address.title}</div>
                                            </>
                                        ))}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        )}
                        <div className='w-full mt-8 flex justify-between mx-11'>
                            <Link className='w-auto' to={'/Map'}>
                                <div className='w-auto font-imprima text-gray-400 text-lg'>Skip</div>
                            </Link>
                            <Link className='w-auto ml-auto' to={'/Account'}>
                                <div className='w-auto bg-myDark text-center text-white font-imprima  p-2 rounded-xl hover:brightness-150'>Done</div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <MapContainer center={userLocation} zoom={14.5}
                style={{ height: "100%", width: "100%", position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {userLocation && (
                    <Marker position={userLocation} icon={Mark} draggable={true} eventHandlers={{ dragend: handleMarkerDrag }}></Marker>
                )}
            </MapContainer>
        </>
    )
}
export default Map;