import React from 'react';
//custom 
import { renderWithRedux } from '../../../redux/custom_render_redux'
import DisplayProductsList from './DisplayProductsList';

describe('render', () => {
  it('renders correctly', () => {
    const { asFragment } = renderWithRedux(<DisplayProductsList />, { state: {} });
    expect(asFragment()).toMatchSnapshot();
  });
})