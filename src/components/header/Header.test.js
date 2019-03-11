import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header component tests', () => {
  it('renders the Header component correctly', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
