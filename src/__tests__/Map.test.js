import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

const axios = require('axios');

import Map from '../Map';

test('Adding elements to DOM', async () => {
  // Mock the axios get method to return a mock response
  jest.spyOn(axios, 'get').mockResolvedValue({
    data: {
      items: [
        { id: 1, title: 'Element 1' },
        { id: 2, title: 'Element 2' },
      ],
    },
  });
  // Render the component
  render(<Map />);
  // Wait for the async operation to finish
  await waitFor(() => {
    expect(screen.getByText('Element 1')).toBeInTheDocument();
    expect(screen.getByText('Element 2')).toBeInTheDocument();
  });
});