import {Marker, MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

import {useEffect, useState} from 'react';
import axios from 'axios';

import mark from '../src/images/mark.png'
import friendLoc from '../src/images/friendLoc.png'
import back from '../src/images/back2.png'
import search from '../src/images/search.png'
import botLoc from './images/bot_location.png';
import botChat from './images/bot_chat.png';
import botUser from './images/bot_user.png';


import React from 'react';
import './App.css';
import {Link, useNavigate} from "react-router-dom";


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import {FreeMode, Scrollbar, Mousewheel} from 'swiper';
import 'swiper/css';

const Mark = L.icon({
  iconUrl: mark,
  iconSize: [120, 50],
  iconAnchor: [16, 32],
});

function Map({user,setUser,OtherLocation,setOtherLocation,setUserArray}) {
  const [userLocation, setUserLocation] = useState([36.5626, 53.0602]);
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState([]);
  const [bool, setBool] = useState(false);
  let id=0

  const name=user.user.name
  const username=user.user.username
  const email=user.user.email
  const password=user.user.password
  const user_id=user.user.user_id
  const favorites=user.user.favorites
  const hobbies=user.user.hobbies
  const education=user.user.education
  const job=user.user.job
  const date=user.user.date
  const gender=user.user.gender
  
  const done =async()=>{
    console.log("speee")
    if(user.locations !=null){
    if(user.locations.loc_description !==''){
      console.log("heeee")
      setAddress(user.locations.loc_description)
      id=user.locations.location_id
      }
    }  
        try {
            console.log("oomad")
            console.log(userLocation["lat"])
            axios.defaults.headers.put['Content-Type'] = 'application/json';
            const response = await axios.put(
                'http://localhost:5000/UserManagement',
                {
                    User: {
                        user_id: user_id,
                        username: username,
                        password: password,
                        email: email,
                        name: name,
                        favorites: favorites,
                        hobbies: hobbies,
                        education: education,
                        job: job,
                        gender:gender,
                        date:date
                    },
                    Locations:{
                      location_id:id,
                      x:userLocation.lat,
                      y:userLocation.lng,
                      loc_description:address
                    }
                }
            );
            const status = response.status;
            const data = response.data
            console.log(data)
            console.log(status)
            if(status === 200){
                setUser(data)
                setOtherLocation(data.otherLocation)
                console.log(OtherLocation)
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
        console.log(OtherLocation)
  }

  const handleMarkerDrag = async (e) => {
    const LatLng = e.target.getLatLng();
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
          const {latitude, longitude} = position.coords;
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

  const handleChange = async (event) => {
    const inputText = event.target.value;
    setAddress(inputText)
    setBool(true)
    if (inputText.trim() !== '') {
      try {
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

      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    } else {
      setAddresses([]);
    }
    addresses.map((address) => (console.log(address)));
  }

  const navigate = useNavigate();

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center'>
        <div className='w-11/12 xl:w-9/12 my-4 flex item-center'>
          <div className='flex items-center justify-center w-auto mr-auto bg-white p-1 py-3 h-min z-10 rounded-xl'>
            <Link to={''}>
              <img className='w-4/5 m-auto' src={back} alt="back"/>
            </Link>
          </div>
          <div className='w-10/12 flex flex-col items-center'>
            <div className='w-full flex p-1 items-center justify-between z-10 bg-myOrange rounded-xl'>
              <img className='w-10' src={search} alt="search"/>
              <input className='w-4/5 ml-auto px-2 py-3 rounded-xl outline-none text-xl text-right font-imprima text-black'
                     onChange={handleChange} placeholder='Your Location' value={address}/>
            </div>
            <div className='w-full z-10'>
              {bool && address && addresses.length > 0 && (
                <div
                  className='w-full bg-white px-2 z-10 overflow-hidden shadow-slate-300 shadow-sm border-x-2 border-b-2 border-gray-200 rounded-b-xl h-auto max-h-40 mb-7 flex flex-col justify-between items-end'>
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
                               onClick={() => {
                                 setAddress(address.title);
                                 setBool(false);
                                 setUserLocation([address.location.y, address.location.x]);
                               }} key={address.id}>{address.title}</div>
                        </>
                      ))}
                    </SwiperSlide>
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
        <Link className='w-5/12 sm:w-3/12 mx-auto z-10 mt-auto mb-16' to={''}>
          <div
            className='rounded-3xl py-4 w-full bg-myDark hover:brightness-150 text-center text-lg text-white font-imprima' onClick={done}>Find Friends
          </div>
        </Link>
        <div className='fixed py-3 z-10 px-7 sm:mx-auto flex justify-between items-center bottom-0 w-full bg-slate-100'>
          <Link className='w-auto' to={'/Map'}>
              <img src={botLoc} alt='location' className='w-4/5'/>
          </Link>
          <Link className='w-auto' to={''}>
              <img src={botChat} alt='chat' className='w-4/5'/>
          </Link>
          <Link className='w-auto' to={'/Account'}>
              <img src={botUser} alt='profile' className='w-4/5'/>
          </Link>
        </div>
      </div>
      <MapContainer center={userLocation} zoom={14.5}
                    style={{height: "100%", width: "100%", position: "fixed", top: 0, left: 0, right: 0, bottom: 0}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {OtherLocation.map((location, index) => (
          <Link to={'/FriendProfile'} key={index}>
            <Marker
              position={[location.locations.x,location.locations.y]}
              icon={L.icon({
                iconUrl: friendLoc,
                iconSize: [40, 40],
                iconAnchor: [16, 32],
              })}
              eventHandlers={{
                click: () => {
                  setUserArray(location)
                  navigate('/FriendProfile');
                },
              }}
            />
          </Link>
        ))}
        {userLocation && (
          <Marker position={userLocation} icon={Mark} draggable={true}
                  eventHandlers={{dragend: handleMarkerDrag}}></Marker>
        )}
      </MapContainer>
    </>
  )
}

export default Map;