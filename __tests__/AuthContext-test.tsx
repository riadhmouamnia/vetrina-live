import {AuthContext} from 'context/AuthContext';
import React from 'react';
import renderer from 'react-test-renderer';

describe('AuthContext', () => {
  it('renders without crashing', () => {
    renderer.create(<AuthContext.Provider value={{}} />);
  });
});
