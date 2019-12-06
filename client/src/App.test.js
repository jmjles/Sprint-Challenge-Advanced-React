import React from 'react';
import {render}from '@testing-library/react';
import App from './App';

test('Renders without crashing', () => {
  render(<App/>)
});

test('Data is Retrieved and Rendered', () => {
  const comp = render(<App/>)
  comp.findByText('Alex Morgan')
  comp.findByText('Kelley O\'Hara')
})