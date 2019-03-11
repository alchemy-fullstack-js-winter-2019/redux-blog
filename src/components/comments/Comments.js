import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';
import { HomePosts } from '../posts/LongestPosts';

export const CommentsList = styles.ul`
@media (min-width: 374px) {
  display: grid:
  grid-template-columns: 33% 33% 33%; 
  padding: 0;
  }
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 33% 33% 33%; 
    padding: 0;
    }
`;

export const CommentsHeader = styles.h3`
@media (min-width: 374px) {
  text-align: left;
  font-family: 'Roboto', san-serif;
  margin: 2em .5em 2em .5em;
  color: rgb(93, 95, 96);
}
`;



const Comments = ({ comments }) => {

  const commentList = comments.map((({ body }) => {
    return (<CommentsHeader key={body}>Comment<HomePosts> {body} </HomePosts></CommentsHeader>) ;
  }));

  return (
    <>
    <CommentsList>  
      {commentList}
    </CommentsList>
     </>
  );
};

Comments.propTypes =  {
  comments: PropTypes.array.isRequired
};

export default Comments; 
