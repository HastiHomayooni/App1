import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

import { useEffect, useState } from 'react';
import axios from 'axios';

import mark from '../src/images/mark.png'
import back from '../src/images/back2.png'

import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Mark = L.icon({
    iconUrl: mark,
    iconSize: [120, 50],
    iconAnchor: [16, 32],
    });
function Map(){
    const [userLocation,setUserLocation] =useState([36.5626, 53.0602]);
    const [address,setAddress] =useState('')


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
    
    return(
        <>
            <div className='w-screen h-screen flex flex-col items-center'>
                <div className='absolute w-11/12 mx-auto flex justify-between bg-white m-4 p-3 z-10 rounded-2xl'>
                    <Link to={''}>
                        <img className='w-10 py-1' src={back} alt="back" />
                    </Link>
                </div>
                <div className='rounded-t-3xl p-4 h-auto w-11/12 mx-auto bg-white flex flex-col items-center justify-center absolute bottom-0 z-10'>
                    <div>{address}</div>
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