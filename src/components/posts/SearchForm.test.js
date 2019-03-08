import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from './SearchForm';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SearchForm component tests', () => {
  it('renders the SearchForm component correctly', () => {
    const term = 'sdf';
    const onChange = jest.fn();
      
    const tree = renderer.create(
      <Router>
        <SearchForm
          term={term}
          onChange={onChange}
        />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
