import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';

import Map from '../Map';

const axios = require('axios');

global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
};
jest.mock('leaflet')
jest.mock('react-leaflet', () => ({
  MapContainer: () => <div>MapContainer</div>,
  TileLayer: () => <div>TileLayer</div>,
  Marker: () => <div>Marker</div>,
}))

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: {}})),
}));
jest.mock('swiper/react', () => ({
  Swiper: ({children}) => <div>{children}</div>,
  SwiperSlide: ({children}) => <div>{children}</div>,
}));
jest.mock('swiper', () => ({
  FreeMode: (props) => null,
  Mousewheel: (props) => null,
  Scrollbar: (props) => null
}))
jest.mock('swiper/css/pagination', () => jest.fn());

//The describe function is used to group the individual test cases for the Map component.
describe('Map', () => {
  test('add an element to DOM', () => {
    render(<Router><Map /></Router>);
    const addressInput = screen.getByPlaceholderText('Your Location');
    expect(addressInput).toBeInTheDocument();
  });
  
  test('updates an element when input changes', () => {
    render(<Router><Map /></Router>);
    const addressInput = screen.getByPlaceholderText('Your Location');
    //The act() is for wrapping interactions with components and handling any resulting side effects
    //to ensure that React has a chance to update the component
    act(() => {
      fireEvent.change(addressInput, { target: { value: 'New York' } });
    });
    expect(addressInput.value).toBe('New York');
  });

  test('deletes an element from DOM', () => {
    render(<Router><Map /></Router>);
    const addressInput = screen.getByPlaceholderText('Your Location');
    act(() => {
      fireEvent.change(addressInput, { target: { value: '' } });
    });
    expect(addressInput.value).toBe('');
  });
});

