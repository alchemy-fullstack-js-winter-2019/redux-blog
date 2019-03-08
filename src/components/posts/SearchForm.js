import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ term, onChange }) {
  return (
        <>
        <label> Search Posts: 
          <input name='SearchTerm' value={term} onChange={onChange}/>
        </label>
        </>
  );
}
SearchForm.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
;
