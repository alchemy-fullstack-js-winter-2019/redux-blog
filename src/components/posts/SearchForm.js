import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const PostLabel = styles.label`
@media (min-width: 374px) {
  color: rgb(93, 95, 96);
  font-family: 'Roboto', san-serif;
  display: flex;
  justify-content: center;  
  margin-top: 1em;
  }
  @media (min-width: 600px) {
    color: rgb(93, 95, 96);
    font-family: 'Roboto', san-serif;
    font-size: 30px;
    display: flex;
    justify-content: center;  
    margin-top: 1em;
    input {
        font-size: 20px;
    }
  }
`;

const PostButton = styles.button`
@media (min-width: 374px) {
  font-family: 'Roboto', san-serif;
  color: rgb(93, 95, 96);
  margin-top: 1em;  
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  }
  @media (min-width: 600px) {
    font-family: 'Roboto', san-serif;
    color: rgb(93, 95, 96);
    margin-top: 1em;  
    display: block;
    font-size: 30px;
    margin-right: auto;
    margin-left: auto;
    width: 10%;
    }
`;


const SearchForm = ({ searchTerm, handleChange, handleReset }) => {
  return (
    < >
      <PostLabel htmlFor="searchTerm">
        Search posts: <br/>
        <input name="searchTerm" value={searchTerm} onChange={handleChange}/>
      </PostLabel>
      <PostButton onClick={handleReset}>Reset</PostButton>
    </>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default SearchForm;
